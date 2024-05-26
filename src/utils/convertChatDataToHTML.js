import { getCurrentDateTime } from "./time";

export const convertChatDataToHTML = (jsonData) => {
  let chatEntries = "";

  Object.keys(jsonData).forEach((key) => {
    const entry = jsonData[key];
    const { Prompt, Response } = entry;
    chatEntries += `
        <h4>Prompt:</h4><p>${Prompt}</p>
        <h4>Response:</h4><p>${Response}</p>
        <hr>
      `;
  });
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>LawSage - ${getCurrentDateTime()}</title>
        <style>
        body {
            font-size: 16px;
        }

        h1 {
            text-align: center;
        }
        h3 {
         text-align: center;   
         background-color: rgb(255, 253, 81);
        }
    </style>
    </head>
    <body>
        <h1>LawSage - ${getCurrentDateTime()}</h1>
        <h3>By Aditya Balsane <br>
        Github: <a href="https://github.com/adityaxp/LawSageApp">https://github.com/adityaxp/LawSageApp</a>
       <br> HuggingFace: <a href="https://huggingface.co/AdityaXPV">https://huggingface.co/AdityaXPV</a>

</h3>
        <br>
        <hr>
            ${chatEntries}
    </body>
    </html>
`;

  return htmlContent;
};
