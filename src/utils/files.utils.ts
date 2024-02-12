export function downloadJson(object: object, filename = "download.json") {
  const data = new Blob([JSON.stringify(object)], { type: "text/json" });
  const jsonURL = window.URL.createObjectURL(data);
  const link = document.createElement("a");
  document.body.appendChild(link);
  link.href = jsonURL;
  link.setAttribute("download", filename);
  link.click();
  document.body.removeChild(link);
}
