import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import * as Print from "expo-print";

export const storeDataInFile = async (fileName, fileType, data) => {
  try {
    const jsonData = JSON.stringify(data);
    const filePath = `${FileSystem.documentDirectory}${fileName}${fileType}`;
    console.log(filePath);

    await FileSystem.writeAsStringAsync(filePath, jsonData);
    console.log("Data written to file successfully!");

    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(filePath);
    } else {
      console.log("Sharing is not available on this device");
    }
  } catch (error) {
    console.error("Error writing data to file:", error);
  }
};

export const saveHTMLToPDF = async (fileName, htmlContent) => {
  try {
    const { uri } = await Print.printToFileAsync({
      html: htmlContent,
    });
    console.log("PDF generated at:", uri);

    const pdfFilePath = `${FileSystem.documentDirectory}${fileName}.pdf`;

    await FileSystem.moveAsync({
      from: uri,
      to: pdfFilePath,
    });
    console.log("PDF saved to:", pdfFilePath);

    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(pdfFilePath);
    } else {
      console.log("Sharing is not available on this device");
    }
  } catch (error) {
    console.error("Error generating or saving PDF:", error);
    throw error;
  }
};
