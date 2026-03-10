# -*- coding: utf-8 -*-
# flake8: noqa: E501
"""System prompt building utilities.

This module provides utilities for building system prompts from
markdown configuration files in the working directory.
"""
import logging
from pathlib import Path

logger = logging.getLogger(__name__)

# Default fallback prompt
DEFAULT_SYS_PROMPT = """
You are a helpful assistant.
"""

# Backward compatibility alias
SYS_PROMPT = DEFAULT_SYS_PROMPT


class PromptConfig:
    """Configuration for system prompt building."""

    # Default files to load when no config is provided
    # All files are optional - if they don't exist, they'll be skipped
    DEFAULT_FILES = [
        "AGENTS.md",
        "SOUL.md",
        "PROFILE.md",
    ]


class PromptBuilder:
    """Builder for constructing system prompts from markdown files."""

    def __init__(
        self,
        working_dir: Path,
        enabled_files: list[str] | None = None,
    ):
        """Initialize prompt builder.

        Args:
            working_dir: Directory containing markdown configuration files
            enabled_files: List of filenames to load (if None, uses default order)
        """
        self.working_dir = working_dir
        self.enabled_files = enabled_files
        self.prompt_parts = []
        self.loaded_count = 0

    def _load_file(self, filename: str) -> None:
        """Load a single markdown file.

        All files are optional - if they don't exist or can't be read,
        they will be silently skipped.

        Args:
            filename: Name of the file to load
        """
        file_path = self.working_dir / filename

        if not file_path.exists():
            logger.debug("File %s not found, skipping", filename)
            return

        try:
            content = file_path.read_text(encoding="utf-8").strip()

            # Remove YAML frontmatter if present
            if content.startswith("---"):
                parts = content.split("---", 2)
                if len(parts) >= 3:
                    content = parts[2].strip()

            if content:
                if self.prompt_parts:  # Add separator if not first section
                    self.prompt_parts.append("")
                # Add section header with filename
                self.prompt_parts.append(f"# {filename}")
                self.prompt_parts.append("")
                self.prompt_parts.append(content)
                self.loaded_count += 1
                logger.debug("Loaded %s", filename)
            else:
                logger.debug("Skipped empty file: %s", filename)

        except Exception as e:
            logger.warning(
                "Failed to read file %s: %s, skipping",
                filename,
                e,
            )

    def build(self) -> str:
        """Build the system prompt from markdown files.

        All files are optional. If no files can be loaded, returns the default prompt.

        Returns:
            Constructed system prompt string
        """
        # Determine which files to load
        files_to_load = (
            PromptConfig.DEFAULT_FILES
            if self.enabled_files is None
            else self.enabled_files
        )

        # Load all files (all are optional)
        for filename in files_to_load:
            self._load_file(filename)

        if not self.prompt_parts:
            logger.warning("No content loaded from working directory")
            return DEFAULT_SYS_PROMPT

        # Join all parts with double newlines
        final_prompt = "\n\n".join(self.prompt_parts)

        logger.debug(
            "System prompt built from %d file(s), total length: %d chars",
            self.loaded_count,
            len(final_prompt),
        )

        return final_prompt


def build_system_prompt_from_working_dir() -> str:
    """
    Build system prompt by reading markdown files from working directory.

    This function constructs the system prompt by loading markdown files from
    WORKING_DIR (~/.copaw by default). These files define the agent's behavior,
    personality, and operational guidelines.

    The files to load are determined by the agents.system_prompt_files configuration.
    If not configured, falls back to default files:
    - AGENTS.md - Detailed workflows, rules, and guidelines
    - SOUL.md - Core identity and behavioral principles
    - PROFILE.md - Agent identity and user profile

    All files are optional. If a file doesn't exist or can't be read, it will be
    skipped. If no files can be loaded, returns the default prompt.

    Returns:
        str: Constructed system prompt from markdown files.
             If no files exist, returns the default prompt.

    Example:
        If working_dir contains AGENTS.md, SOUL.md and PROFILE.md, they will be combined:
        "# AGENTS.md\\n\\n...\\n\\n# SOUL.md\\n\\n...\\n\\n# PROFILE.md\\n\\n..."
    """
    from ..constant import WORKING_DIR
    from ..config import load_config

    # Load enabled files from config
    config = load_config()
    enabled_files = (
        config.agents.system_prompt_files
        if config.agents.system_prompt_files is not None
        else None
    )

    builder = PromptBuilder(
        working_dir=Path(WORKING_DIR),
        enabled_files=enabled_files,
    )
    return builder.build()


def build_bootstrap_guidance(
    language: str = "ko",
) -> str:
    """Build bootstrap guidance message for first-time setup.

    Args:
        language: Language code (en/zh/ko)

    Returns:
        Formatted bootstrap guidance message
    """
    if language == "en":
        return """# 🌟 BOOTSTRAP MODE ACTIVATED

**IMPORTANT: You are in first-time setup mode.**

A `BOOTSTRAP.md` file exists in your working directory. This means you should guide the user through the bootstrap process to establish your identity and preferences.

**Your task:**
1. Read the BOOTSTRAP.md file, greet the user warmly as a first meeting, and guide them through the bootstrap process.
2. Follow the instructions in BOOTSTRAP.md. For example, help the user define your identity, their preferences, and establish the working relationship.
3. Create and update the necessary files (PROFILE.md, MEMORY.md, etc.) as described in the guide.
4. After completing the bootstrap process, delete BOOTSTRAP.md as instructed.

**If the user wants to skip:**
If the user explicitly says they want to skip the bootstrap or just want their question answered directly, then proceed to answer their original question below. You can always help them bootstrap later.

**Original user message:**
"""
    elif language == "ko":
        return """# 🌟 가이드 모드 활성화됨

**중요: 현재 처음 설정 모드에 있습니다.**

작업 디렉토리에 `BOOTSTRAP.md` 파일이 존재합니다. 이는 당신의 정체성과 선호도를 설정하기 위해 사용자를 가이드 프로세스로 안내해야 함을 의미합니다.

**당신의 임무:**
1. BOOTSTRAP.md 파일을 읽고, 사용자에게 첫 만남의 인사를 따뜻하게 건네며 가이드 프로세스를 안내하세요.
2. BOOTSTRAP.md 내의 지침을 따르세요. 예를 들어, 사용자가 당신의 정체성과 그들의 선호도를 정의하고 업무 관계를 구축하도록 도와주세요.
3. 가이드에 설명된 대로 필요한 파일(PROFILE.md, MEMORY.md 등)을 생성하고 업데이트하세요.
4. 가이드 프로세스를 마친 후, 지침에 따라 BOOTSTRAP.md를 삭제하세요.

**사용자가 건너뛰기를 원하는 경우:**
사용자가 명시적으로 가이드를 건너뛰고 싶어하거나 질문에 직접 답하기를 원하는 경우, 아래의 원래 질문에 답하세요. 나중에 언제든지 가이드를 도와줄 수 있습니다.

**사용자의 원래 메시지:**
"""
    else:
        return """# 🌟 BOOTSTRAP MODE ACTIVATED

**IMPORTANT: You are in first-time setup mode.**

A `BOOTSTRAP.md` file exists in your working directory. This means you should guide the user through the bootstrap process to establish your identity and preferences.

**Your task:**
1. Read the BOOTSTRAP.md file, greet the user warmly as a first meeting, and guide them through the bootstrap process.
2. Follow the instructions in BOOTSTRAP.md. For example, help the user define your identity, their preferences, and establish the working relationship.
3. Create and update the necessary files (PROFILE.md, MEMORY.md, etc.) as described in the guide.
4. After completing the bootstrap process, delete BOOTSTRAP.md as instructed.

**If the user wants to skip:**
If the user explicitly says they want to skip the bootstrap or just want their question answered directly, then proceed to answer their original question below. You can always help them bootstrap later.

**Original user message:**
"""


__all__ = [
    "build_system_prompt_from_working_dir",
    "build_bootstrap_guidance",
    "PromptBuilder",
    "PromptConfig",
    "DEFAULT_SYS_PROMPT",
    "SYS_PROMPT",  # Backward compatibility
]
