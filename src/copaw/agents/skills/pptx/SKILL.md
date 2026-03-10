---
name: pptx
description: "사용자가 PowerPoint 프레젠테이션(.pptx 파일)을 생성, 읽기, 편집 또는 조작하기를 원할 때 이 스킬을 사용하세요. 실행 트리거: \"PPT\", \"파워포인트\", \".pptx\" 언급, 또는 슬라이드 쇼 제작, 발표 자료 준비 요청. 또한 .pptx 파일의 슬라이드 내용 추출, 기존 프레젠테이션 편집, 새로운 슬라이드 추가, 슬라이드를 이미지로 변환, 또는 세련된 레이아웃과 디자인이 포함된 전문적인 PPT 제작 시에도 사용합니다. 사용자가 \"발표 자료\", \"슬라이드 데크\", \"피치 덱\" 등을 PPT나 .pptx 파일로 요청하면 이 스킬을 활용하세요. PDF, 워드 문서, 스프레드시트 또는 문서 생성과 관련 없는 일반 코딩 작업에는 사용하지 마세요."
license: Proprietary. LICENSE.txt has complete terms
---

# PPTX 생성, 편집 및 분석 가이드

## 런타임 의존성 (Dependencies)

- 문서-이미지 변환(슬라이드 미리보기) 워크플로우를 위해 LibreOffice(`soffice`)와 Poppler(`pdftoppm`)가 필요합니다.
- `pdftoppm`을 사용할 수 없는 경우, Python의 `pdf2image`를 대체 경로로 사용할 수 있습니다.
- Windows의 경우, 의존성 도구들이 설치되어 있고 `PATH`에 등록되어 있어야 합니다. 누락된 경우 문제를 보고하고 중단하세요(반복 재시도 금지).

## 개요

.pptx 파일은 XML 파일들을 포함하고 있는 ZIP 아카이브입니다.

## 빠른 참조 (Quick Reference)

| 작업 | 접근 방식 |
|------|----------|
| 내용 읽기/분석 | `python-pptx` 사용 또는 원본 XML 추출 |
| 기존 문서 편집 | `python-pptx` 사용 또는 [편집 워크플로우] 참조 |
| 새 문서 생성 | `pptxgenjs` 사용 - 아래 [새 라이브러리로 생성] 참조 |

### 내용 읽기 (Python)

```python
from pptx import Presentation

prs = Presentation('presentation.pptx')
for slide in prs.slides:
    for shape in slide.shapes:
        if hasattr(shape, "text"):
            print(shape.text)
```

### 이미지로 변환

```bash
python scripts/office/soffice.py --headless --convert-to pdf document.pptx
pdftoppm -jpeg -r 150 document.pdf page
```

---

## 편집 워크플로우 (압축 해제 기반)

**아래 3단계를 순서대로 따르세요.**

### 1단계: 압축 해제 (Unpack)
```bash
python scripts/office/unpack.py document.pptx unpacked/
```
XML을 추출하고 가독성을 위해 자동 줄바꿈을 적용합니다.

### 2단계: XML 편집
`unpacked/ppt/slides/` 내의 슬라이드 XML 파일들을 수정하세요.

### 3단계: 다시 압축 (Pack)
```bash
python scripts/office/pack.py unpacked/ output.pptx --original document.pptx
```
XML을 다시 압축하여 PPTX를 생성합니다.

---

## 새 라이브러리로 생성 (Generating from Scratch)

전문적인 프레젠테이션 생성을 위해 JavaScript 라이브러리 `pptxgenjs`를 사용하세요.

### 설치 및 설정
```bash
npm install pptxgenjs
```

### 기본 사용법
```javascript
const pptxgen = require("pptxgenjs");
let pres = new pptxgen();

let slide = pres.addSlide();
slide.addText("Hello World!", { x: 1, y: 1, color: "363636" });

pres.writeFile({ fileName: "Sample.pptx" });
```

### 디자인 아이디어 및 원칙

고품질의 전문적인 프레젠테이션을 만들기 위해 다음 지침을 따르세요.

#### 1. 색상 팔레트 (Color Palette)
일관된 색상 조합을 사용하세요.
- **배경**: 흰색(`FFFFFF`) 또는 아주 연한 회색(`F2F2F2`)
- **기본 텍스트**: 진한 회색(`363636`) - 순수 검정보다는 부드럽습니다.
- **강조색**: 브랜드 색상 (예: 세련된 파란색 `007BFF`, 따뜻한 주황색 `FF5733`)
- **보조색**: 강조색의 연한 버전 (데이터 시각화 등에 사용)

#### 2. 타이포그래피 (Typography)
- **폰트**: 가독성이 높은 고딕체(Sans-serif)를 권장합니다 (예: Arial, Calibri, 본고딕).
- **크기**:
  - 제목: 32pt 이상
  - 본문: 18pt 이상 (발표용), 12pt 이상 (배포용)
- **정렬**: 슬라이드 전체에서 일관된 정렬(주로 왼쪽 정렬)을 유지하세요.

#### 3. 레이아웃과 간격 (Layout & Spacing)
- **여백(White Space)**: 슬라이드를 텍스트로 꽉 채우지 마세요. 넉넉한 여백이 가독성을 높입니다.
- **그리드**: 요소들을 일직선으로 정렬하여 질서를 부여하세요.
- **시각적 계층**: 크기와 색상을 조절하여 가장 중요한 정보를 먼저 보게 하세요.

#### 4. 전문적인 슬라이드 구성 예시
- **표지**: 큰 제목, 부제목, 로고, 날짜, 작성자
- **목차**: 깔끔한 리스트와 아이콘 사용
- **본문 슬라이드**: 
  - 상단: 명확한 슬라이드 제목
  - 중앙: 핵심 메시지 (그래프, 이미지, 또는 3~5개의 불릿 포인트)
  - 하단: 페이지 번호, 간단한 하단 영역(Footer)

### 품질 확인(QA) 절차

파일을 생성한 후에는 반드시 다음 사항을 확인하세요:
1. 모든 슬라이드에서 텍스트가 겹치지 않는가?
2. 색상 대비가 충분하여 글자가 잘 보이는가?
3. 이미지의 비율이 깨지지 않았는가?
4. 오타나 맞춤법 오류는 없는가? (한국어 맞춤법 주의)

---

## 주요 도구 요약

- **pptxgenjs**: JavaScript 기반의 강력한 PPT 생성 도구
- **python-pptx**: Python 기반의 읽기 및 간단한 편집 도구
- **LibreOffice**: PDF 변환 및 미리보기 생성용
- **Poppler**: PDF를 이미지로 변환하여 슬라이드 샘플 확인용

| Theme | Primary | Secondary | Accent |
|-------|---------|-----------|--------|
| **Midnight Executive** | `1E2761` (navy) | `CADCFC` (ice blue) | `FFFFFF` (white) |
| **Forest & Moss** | `2C5F2D` (forest) | `97BC62` (moss) | `F5F5F5` (cream) |
| **Coral Energy** | `F96167` (coral) | `F9E795` (gold) | `2F3C7E` (navy) |
| **Warm Terracotta** | `B85042` (terracotta) | `E7E8D1` (sand) | `A7BEAE` (sage) |
| **Ocean Gradient** | `065A82` (deep blue) | `1C7293` (teal) | `21295C` (midnight) |
| **Charcoal Minimal** | `36454F` (charcoal) | `F2F2F2` (off-white) | `212121` (black) |
| **Teal Trust** | `028090` (teal) | `00A896` (seafoam) | `02C39A` (mint) |
| **Berry & Cream** | `6D2E46` (berry) | `A26769` (dusty rose) | `ECE2D0` (cream) |
| **Sage Calm** | `84B59F` (sage) | `69A297` (eucalyptus) | `50808E` (slate) |
| **Cherry Bold** | `990011` (cherry) | `FCF6F5` (off-white) | `2F3C7E` (navy) |

### For Each Slide

**Every slide needs a visual element** — image, chart, icon, or shape. Text-only slides are forgettable.

**Layout options:**
- Two-column (text left, illustration on right)
- Icon + text rows (icon in colored circle, bold header, description below)
- 2x2 or 2x3 grid (image on one side, grid of content blocks on other)
- Half-bleed image (full left or right side) with content overlay

**Data display:**
- Large stat callouts (big numbers 60-72pt with small labels below)
- Comparison columns (before/after, pros/cons, side-by-side options)
- Timeline or process flow (numbered steps, arrows)

**Visual polish:**
- Icons in small colored circles next to section headers
- Italic accent text for key stats or taglines

### Typography

**Choose an interesting font pairing** — don't default to Arial. Pick a header font with personality and pair it with a clean body font.

| Header Font | Body Font |
|-------------|-----------|
| Georgia | Calibri |
| Arial Black | Arial |
| Calibri | Calibri Light |
| Cambria | Calibri |
| Trebuchet MS | Calibri |
| Impact | Arial |
| Palatino | Garamond |
| Consolas | Calibri |

| Element | Size |
|---------|------|
| Slide title | 36-44pt bold |
| Section header | 20-24pt bold |
| Body text | 14-16pt |
| Captions | 10-12pt muted |

### Spacing

- 0.5" minimum margins
- 0.3-0.5" between content blocks
- Leave breathing room—don't fill every inch

### Avoid (Common Mistakes)

- **Don't repeat the same layout** — vary columns, cards, and callouts across slides
- **Don't center body text** — left-align paragraphs and lists; center only titles
- **Don't skimp on size contrast** — titles need 36pt+ to stand out from 14-16pt body
- **Don't default to blue** — pick colors that reflect the specific topic
- **Don't mix spacing randomly** — choose 0.3" or 0.5" gaps and use consistently
- **Don't style one slide and leave the rest plain** — commit fully or keep it simple throughout
- **Don't create text-only slides** — add images, icons, charts, or visual elements; avoid plain title + bullets
- **Don't forget text box padding** — when aligning lines or shapes with text edges, set `margin: 0` on the text box or offset the shape to account for padding
- **Don't use low-contrast elements** — icons AND text need strong contrast against the background; avoid light text on light backgrounds or dark text on dark backgrounds
- **NEVER use accent lines under titles** — these are a hallmark of AI-generated slides; use whitespace or background color instead

---

## QA (Required)

**Assume there are problems. Your job is to find them.**

Your first render is almost never correct. Approach QA as a bug hunt, not a confirmation step. If you found zero issues on first inspection, you weren't looking hard enough.

### Content QA

```bash
python -m markitdown output.pptx
```

Check for missing content, typos, wrong order.

**When using templates, check for leftover placeholder text:**

```bash
python -m markitdown output.pptx | grep -iE "xxxx|lorem|ipsum|this.*(page|slide).*layout"
```

If grep returns results, fix them before declaring success.

### Visual QA

**⚠️ USE SUBAGENTS** — even for 2-3 slides. You've been staring at the code and will see what you expect, not what's there. Subagents have fresh eyes.

Convert slides to images (see [Converting to Images](#converting-to-images)), then use this prompt:

```
Visually inspect these slides. Assume there are issues — find them.

Look for:
- Overlapping elements (text through shapes, lines through words, stacked elements)
- Text overflow or cut off at edges/box boundaries
- Decorative lines positioned for single-line text but title wrapped to two lines
- Source citations or footers colliding with content above
- Elements too close (< 0.3" gaps) or cards/sections nearly touching
- Uneven gaps (large empty area in one place, cramped in another)
- Insufficient margin from slide edges (< 0.5")
- Columns or similar elements not aligned consistently
- Low-contrast text (e.g., light gray text on cream-colored background)
- Low-contrast icons (e.g., dark icons on dark backgrounds without a contrasting circle)
- Text boxes too narrow causing excessive wrapping
- Leftover placeholder content

For each slide, list issues or areas of concern, even if minor.

Read and analyze these images:
1. /path/to/slide-01.jpg (Expected: [brief description])
2. /path/to/slide-02.jpg (Expected: [brief description])

Report ALL issues found, including minor ones.
```

### Verification Loop

1. Generate slides → Convert to images → Inspect
2. **List issues found** (if none found, look again more critically)
3. Fix issues
4. **Re-verify affected slides** — one fix often creates another problem
5. Repeat until a full pass reveals no new issues

**Do not declare success until you've completed at least one fix-and-verify cycle.**

---

## Converting to Images

Convert presentations to individual slide images for visual inspection:

```bash
python scripts/office/soffice.py --headless --convert-to pdf output.pptx
pdftoppm -jpeg -r 150 output.pdf slide
```

This creates `slide-01.jpg`, `slide-02.jpg`, etc.

To re-render specific slides after fixes:

```bash
pdftoppm -jpeg -r 150 -f N -l N output.pdf slide-fixed
```

---

## Dependencies

- `pip install "markitdown[pptx]"` - text extraction
- `pip install Pillow` - thumbnail grids
- `npm install -g pptxgenjs` - creating from scratch
- LibreOffice (`soffice`) - PDF conversion (auto-configured for sandboxed environments via `scripts/office/soffice.py`)
- Poppler (`pdftoppm`) - PDF to images
