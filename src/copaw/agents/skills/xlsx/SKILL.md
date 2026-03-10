---
name: xlsx
description: "사용자가 Excel 스프레드시트(.xlsx, .xlsm, .csv, .tsv 파일)를 생성, 읽기, 편집 또는 조작하기를 원할 때 이 스킬을 사용하세요. 실행 트리거: \"엑셀\", \"스프레드시트\", \".xlsx\", \".csv\" 언급, 또는 데이터 분석, 재무 모델링, 차트 생성 요청. 또한 데이터 추출, 수식 추가, 셀 서식 지정, 대량의 데이터 처리, 또는 전문적인 보고서용 엑셀 파일 제작 시에도 사용합니다. 사용자가 \"매출 보고서\", \"데이터 정리\", \"재무 제표\" 등을 엑셀이나 .xlsx 파일로 요청하면 이 스킬을 활용하세요."
license: Proprietary. LICENSE.txt has complete terms
---

# XLSX 생성, 편집 및 분석 가이드

## 출력물 요구사항 (Output Requirements)

전문적인 피드백을 유지하기 위해 다음 지침을 엄격히 준수하세요.

### 1. 폰트 및 가독성
- **기본 폰트**: 맑은 고딕(Malgun Gothic) 또는 Arial, 10pt 또는 11pt.
- **제목**: 굵게(Bold), 배경색 지정(연한 파란색 또는 회색).
- **정렬**: 텍스트는 왼쪽 정합, 숫자는 오른쪽 정합.

### 2. 수식 및 오류 방지
- **#REF!, #VALUE!, #DIV/0!** 오류가 절대 발생하지 않도록 하세요.
- 복잡한 수식에는 `IFERROR`를 사용하여 깔끔하게 처리하세요 (예: `=IFERROR(A1/B1, 0)`).
- 원시 데이터(Raw data)와 계산 영역을 시트로 명확히 구분하세요.

### 3. 서식 및 템플릿 유지
- 기존 엑셀 파일을 편집할 때 사용자의 스타일, 테마, 명명된 범위(Named Ranges) 등을 파괴하지 마세요.
- 전문적인 재무 모델링 표준을 따르세요 (아래 참조).

---

## 재무 모델링 표준 (Financial Modeling Standards)

세련된 엑셀 파일을 위해 다음 색상 코딩과 서식을 사용하세요.

### 1. 색상 코딩 (Color Coding)
- **파란색 (Blue)**: 입력값 (Inputs/Hardcodes) - 사용자가 직접 입력해야 하는 값.
- **검정색 (Black)**: 수식 (Formulas) - 같은 시트 내의 참조.
- **초록색 (Green)**: 시트 간 참조 (Cross-sheet references).
- **빨간색 (Red)**: 주의 사항 또는 의존성 오류.

### 2. 숫자 서식 (Number Formatting)
- **통화**: 원화(`₩`) 또는 달러(`$`) 기호를 일관되게 사용하고 천 단위 구분 기호(`,`)를 넣으세요.
- **비율**: 백분율(`%`)을 사용하고 소수점 자릿수를 통일하세요.
- **날짜**: `YYYY-MM-DD` 형식을 권장합니다 (예: 2025-01-01).

---

## XLSX 생성 및 편집 워크플로우

### Python 라이브러리 선택 가이드

| 상황 | 추천 라이브러리 | 특징 |
|------|-----------|------|
| 대량 데이터 처리, 분석 | **pandas** | 쉽고 빠름, 서식 지정은 제한적 |
| 복잡한 서식, 수식, 차트 | **openpyxl** | 세밀한 제어 가능, 속도는 pandas보다 느림 |
| 기존 수식 유지하며 편집 | **openpyxl** | `load_workbook(data_only=False)` 필수 |

### 1. pandas를 이용한 데이터 처리 (Python)

```python
import pandas as pd

# 읽기
df = pd.read_excel('data.xlsx')

# 처리 (예: 필터링)
filtered_df = df[df['매출'] > 1000000]

# 쓰기
filtered_df.to_excel('result.xlsx', index=False)
```

### 2. openpyxl을 이용한 상세 제어 (Python)

```python
from openpyxl import Workbook, load_workbook
from openpyxl.styles import Font, PatternFill, Alignment

# 새 통합 문서 생성
wb = Workbook()
ws = wb.active

# 데이터 추가 및 서식 지정
cell = ws['A1']
cell.value = "매출 요약"
cell.font = Font(bold=True, size=12)
cell.fill = PatternFill(start_color="D9EAD3", fill_type="solid")
cell.alignment = Alignment(horizontal="center")

# 수식 추가
ws['B2'] = "=SUM(B3:B10)"

wb.save('report.xlsx')
```

---

## 검증 체크리스트 (Validation Checklist)

파일을 저장하기 전에 다음 사항을 확인하세요:
1. 모든 시트의 이름이 명확한가?
2. 인쇄 영역이 올바르게 설정되어 있는가? (필요한 경우)
3. 불필요한 빈 행이나 열이 제거되었는가?
4. 수식이 올바른 범위를 참조하고 있는가?
5. 첫 번째 행에 필터가 적용되어 있는가? (데이터 테이블인 경우)

---

## 일반적인 작업 사례

### CSV/TSV를 Excel로 변환
```python
import pandas as pd
df = pd.read_csv('data.csv')
df.to_excel('data.xlsx', index=False)
```

### 여러 엑셀 파일 합치기
```python
import pandas as pd
import glob

all_files = glob.glob("sales_*.xlsx")
li = []

for filename in all_files:
    df = pd.read_excel(filename)
    li.append(df)

frame = pd.concat(li, axis=0, ignore_index=True)
frame.to_excel("combined_sales.xlsx", index=False)
```

# Requirements for Outputs

## All Excel files

### Professional Font
- Use a consistent, professional font (e.g., Arial, Times New Roman) for all deliverables unless otherwise instructed by the user

### Zero Formula Errors
- Every Excel model MUST be delivered with ZERO formula errors (#REF!, #DIV/0!, #VALUE!, #N/A, #NAME?)

### Preserve Existing Templates (when updating templates)
- Study and EXACTLY match existing format, style, and conventions when modifying files
- Never impose standardized formatting on files with established patterns
- Existing template conventions ALWAYS override these guidelines

## Financial models

### Color Coding Standards
Unless otherwise stated by the user or existing template

#### Industry-Standard Color Conventions
- **Blue text (RGB: 0,0,255)**: Hardcoded inputs, and numbers users will change for scenarios
- **Black text (RGB: 0,0,0)**: ALL formulas and calculations
- **Green text (RGB: 0,128,0)**: Links pulling from other worksheets within same workbook
- **Red text (RGB: 255,0,0)**: External links to other files
- **Yellow background (RGB: 255,255,0)**: Key assumptions needing attention or cells that need to be updated

### Number Formatting Standards

#### Required Format Rules
- **Years**: Format as text strings (e.g., "2024" not "2,024")
- **Currency**: Use $#,##0 format; ALWAYS specify units in headers ("Revenue ($mm)")
- **Zeros**: Use number formatting to make all zeros "-", including percentages (e.g., "$#,##0;($#,##0);-")
- **Percentages**: Default to 0.0% format (one decimal)
- **Multiples**: Format as 0.0x for valuation multiples (EV/EBITDA, P/E)
- **Negative numbers**: Use parentheses (123) not minus -123

### Formula Construction Rules

#### Assumptions Placement
- Place ALL assumptions (growth rates, margins, multiples, etc.) in separate assumption cells
- Use cell references instead of hardcoded values in formulas
- Example: Use =B5*(1+$B$6) instead of =B5*1.05

#### Formula Error Prevention
- Verify all cell references are correct
- Check for off-by-one errors in ranges
- Ensure consistent formulas across all projection periods
- Test with edge cases (zero values, negative numbers)
- Verify no unintended circular references

#### Documentation Requirements for Hardcodes
- Comment or in cells beside (if end of table). Format: "Source: [System/Document], [Date], [Specific Reference], [URL if applicable]"
- Examples:
  - "Source: Company 10-K, FY2024, Page 45, Revenue Note, [SEC EDGAR URL]"
  - "Source: Company 10-Q, Q2 2025, Exhibit 99.1, [SEC EDGAR URL]"
  - "Source: Bloomberg Terminal, 8/15/2025, AAPL US Equity"
  - "Source: FactSet, 8/20/2025, Consensus Estimates Screen"

# XLSX creation, editing, and analysis

## Overview

A user may ask you to create, edit, or analyze the contents of an .xlsx file. You have different tools and workflows available for different tasks.

## Runtime Dependencies

- Requires LibreOffice (`soffice`) for formula recalculation via `scripts/recalc.py`.
- `git` is optional but improves redlining diff output in validation workflows.
- On Windows, dependencies must be installed and available in `PATH`; if missing, report the dependency issue and stop (do not keep retrying).

## Important Requirements

**LibreOffice Required for Formula Recalculation**: Use `scripts/recalc.py` to recalculate formula values. The script auto-configures LibreOffice on first run and handles sandboxed environments where Unix sockets are restricted (via `scripts/office/soffice.py`).

## Reading and analyzing data

### Data analysis with pandas
For data analysis, visualization, and basic operations, use **pandas** which provides powerful data manipulation capabilities:

```python
import pandas as pd

# Read Excel
df = pd.read_excel('file.xlsx')  # Default: first sheet
all_sheets = pd.read_excel('file.xlsx', sheet_name=None)  # All sheets as dict

# Analyze
df.head()      # Preview data
df.info()      # Column info
df.describe()  # Statistics

# Write Excel
df.to_excel('output.xlsx', index=False)
```

## Excel File Workflows

## CRITICAL: Use Formulas, Not Hardcoded Values

**Always use Excel formulas instead of calculating values in Python and hardcoding them.** This ensures the spreadsheet remains dynamic and updateable.

### ❌ WRONG - Hardcoding Calculated Values
```python
# Bad: Calculating in Python and hardcoding result
total = df['Sales'].sum()
sheet['B10'] = total  # Hardcodes 5000

# Bad: Computing growth rate in Python
growth = (df.iloc[-1]['Revenue'] - df.iloc[0]['Revenue']) / df.iloc[0]['Revenue']
sheet['C5'] = growth  # Hardcodes 0.15

# Bad: Python calculation for average
avg = sum(values) / len(values)
sheet['D20'] = avg  # Hardcodes 42.5
```

### ✅ CORRECT - Using Excel Formulas
```python
# Good: Let Excel calculate the sum
sheet['B10'] = '=SUM(B2:B9)'

# Good: Growth rate as Excel formula
sheet['C5'] = '=(C4-C2)/C2'

# Good: Average using Excel function
sheet['D20'] = '=AVERAGE(D2:D19)'
```

This applies to ALL calculations - totals, percentages, ratios, differences, etc. The spreadsheet should be able to recalculate when source data changes.

## Common Workflow
1. **Choose tool**: pandas for data, openpyxl for formulas/formatting
2. **Create/Load**: Create new workbook or load existing file
3. **Modify**: Add/edit data, formulas, and formatting
4. **Save**: Write to file
5. **Recalculate formulas (MANDATORY IF USING FORMULAS)**: Use the scripts/recalc.py script
   ```bash
   python scripts/recalc.py output.xlsx
   ```
6. **Verify and fix any errors**: 
   - The script returns JSON with error details
   - If `status` is `errors_found`, check `error_summary` for specific error types and locations
   - Fix the identified errors and recalculate again
   - Common errors to fix:
     - `#REF!`: Invalid cell references
     - `#DIV/0!`: Division by zero
     - `#VALUE!`: Wrong data type in formula
     - `#NAME?`: Unrecognized formula name

### Creating new Excel files

```python
# Using openpyxl for formulas and formatting
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment

wb = Workbook()
sheet = wb.active

# Add data
sheet['A1'] = 'Hello'
sheet['B1'] = 'World'
sheet.append(['Row', 'of', 'data'])

# Add formula
sheet['B2'] = '=SUM(A1:A10)'

# Formatting
sheet['A1'].font = Font(bold=True, color='FF0000')
sheet['A1'].fill = PatternFill('solid', start_color='FFFF00')
sheet['A1'].alignment = Alignment(horizontal='center')

# Column width
sheet.column_dimensions['A'].width = 20

wb.save('output.xlsx')
```

### Editing existing Excel files

```python
# Using openpyxl to preserve formulas and formatting
from openpyxl import load_workbook

# Load existing file
wb = load_workbook('existing.xlsx')
sheet = wb.active  # or wb['SheetName'] for specific sheet

# Working with multiple sheets
for sheet_name in wb.sheetnames:
    sheet = wb[sheet_name]
    print(f"Sheet: {sheet_name}")

# Modify cells
sheet['A1'] = 'New Value'
sheet.insert_rows(2)  # Insert row at position 2
sheet.delete_cols(3)  # Delete column 3

# Add new sheet
new_sheet = wb.create_sheet('NewSheet')
new_sheet['A1'] = 'Data'

wb.save('modified.xlsx')
```

## Recalculating formulas

Excel files created or modified by openpyxl contain formulas as strings but not calculated values. Use the provided `scripts/recalc.py` script to recalculate formulas:

```bash
python scripts/recalc.py <excel_file> [timeout_seconds]
```

Example:
```bash
python scripts/recalc.py output.xlsx 30
```

The script:
- Automatically sets up LibreOffice macro on first run
- Recalculates all formulas in all sheets
- Scans ALL cells for Excel errors (#REF!, #DIV/0!, etc.)
- Returns JSON with detailed error locations and counts
- Works on Linux, macOS, and Windows

## Formula Verification Checklist

Quick checks to ensure formulas work correctly:

### Essential Verification
- [ ] **Test 2-3 sample references**: Verify they pull correct values before building full model
- [ ] **Column mapping**: Confirm Excel columns match (e.g., column 64 = BL, not BK)
- [ ] **Row offset**: Remember Excel rows are 1-indexed (DataFrame row 5 = Excel row 6)

### Common Pitfalls
- [ ] **NaN handling**: Check for null values with `pd.notna()`
- [ ] **Far-right columns**: FY data often in columns 50+ 
- [ ] **Multiple matches**: Search all occurrences, not just first
- [ ] **Division by zero**: Check denominators before using `/` in formulas (#DIV/0!)
- [ ] **Wrong references**: Verify all cell references point to intended cells (#REF!)
- [ ] **Cross-sheet references**: Use correct format (Sheet1!A1) for linking sheets

### Formula Testing Strategy
- [ ] **Start small**: Test formulas on 2-3 cells before applying broadly
- [ ] **Verify dependencies**: Check all cells referenced in formulas exist
- [ ] **Test edge cases**: Include zero, negative, and very large values

### Interpreting scripts/recalc.py Output
The script returns JSON with error details:
```json
{
  "status": "success",           // or "errors_found"
  "total_errors": 0,              // Total error count
  "total_formulas": 42,           // Number of formulas in file
  "error_summary": {              // Only present if errors found
    "#REF!": {
      "count": 2,
      "locations": ["Sheet1!B5", "Sheet1!C10"]
    }
  }
}
```

## Best Practices

### Library Selection
- **pandas**: Best for data analysis, bulk operations, and simple data export
- **openpyxl**: Best for complex formatting, formulas, and Excel-specific features

### Working with openpyxl
- Cell indices are 1-based (row=1, column=1 refers to cell A1)
- Use `data_only=True` to read calculated values: `load_workbook('file.xlsx', data_only=True)`
- **Warning**: If opened with `data_only=True` and saved, formulas are replaced with values and permanently lost
- For large files: Use `read_only=True` for reading or `write_only=True` for writing
- Formulas are preserved but not evaluated - use scripts/recalc.py to update values

### Working with pandas
- Specify data types to avoid inference issues: `pd.read_excel('file.xlsx', dtype={'id': str})`
- For large files, read specific columns: `pd.read_excel('file.xlsx', usecols=['A', 'C', 'E'])`
- Handle dates properly: `pd.read_excel('file.xlsx', parse_dates=['date_column'])`

## Code Style Guidelines
**IMPORTANT**: When generating Python code for Excel operations:
- Write minimal, concise Python code without unnecessary comments
- Avoid verbose variable names and redundant operations
- Avoid unnecessary print statements

**For Excel files themselves**:
- Add comments to cells with complex formulas or important assumptions
- Document data sources for hardcoded values
- Include notes for key calculations and model sections