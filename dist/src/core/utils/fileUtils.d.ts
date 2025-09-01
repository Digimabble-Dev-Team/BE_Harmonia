export declare class FileUtils {
    static xlsxToJsonConvertor(file: any): unknown[];
    static htmlPdfBuffer(html: string): Promise<void>;
    static generatePDF(invoiceContent: any, pdfFileName: any): Promise<void>;
}
