const ExcelJs = require('exceljs')

const workbook = new ExcelJs.Workbook()
workbook.xlsx.readFile("C:/Users/arun9/Downloads/fruits.xlsx").then(() => {
    const currentWorkSheet = workbook.getWorksheet('Sheet1')
    currentWorkSheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, columnNumber) => {
            //console.log(cell.value)
            if (cell.value == "Apple") {
                
                
                
                
            }
        })
    })
})



