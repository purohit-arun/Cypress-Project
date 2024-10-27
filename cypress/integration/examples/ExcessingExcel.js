const ExcelJs = require('exceljs')

/* const workbook = new ExcelJs.Workbook()
workbook.xlsx.readFile("C:/Users/arun9/Downloads/fruits.xlsx").then(() => {
    const currentWorkSheet = workbook.getWorksheet('Sheet1')
    currentWorkSheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, columnNumber) => {
            //console.log(cell.value)
            if (cell.value == "Apple") {




            }
        })
    })
}) */

async function writeExcelTest(searchText) {

    const workbook = new ExcelJs.Workbook()
    await workbook.xlsx.readFile("C:/Users/arun9/Downloads/fruits.xlsx")
    const worksheet = workbook.getWorksheet('Sheet1')
    const output = await readExcel(worksheet, searchText)
    console.log(output.row, output.column)
    const cell = worksheet.getCell(output.row, output.column)
    cell.value = "Republic"
    await workbook.xlsx.writeFile("C:/Users/arun9/Downloads/fruits.xlsx")
}

async function readExcel(workSheet, searchText) {
    let output = { row: -1, column: -1 }
    workSheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            if (cell.value === searchText) {
                output.row = rowNumber
                output.column = colNumber
            }
        })
    })
    console.log(output.row, output.column)

    return output
}


writeExcelTest("Banana")





