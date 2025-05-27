// Tạo menu chính
const menu = document.createElement("div");
menu.style.position = "fixed";
menu.style.top = "50px";
menu.style.left = "50px";
menu.style.background = "#333";
menu.style.color = "white";
menu.style.padding = "12px";
menu.style.borderRadius = "10px";
menu.style.fontFamily = "sans-serif";
menu.style.cursor = "move";
menu.style.zIndex = 9999;
menu.style.userSelect = "none";
menu.style.boxShadow = "0 0 12px rgba(0,0,0,0.5)";
menu.innerText = "Design Mode";

// Tạo nút bật/tắt
const btn = document.createElement("button");
btn.style.marginTop = "12px";
btn.style.display = "block";
btn.style.width = "160px";
btn.style.height = "50px";
btn.style.fontSize = "16px";
btn.style.fontWeight = "bold";
btn.style.padding = "10px";
btn.style.border = "none";
btn.style.borderRadius = "8px";
btn.style.background = "#0c7";
btn.style.color = "white";
btn.style.cursor = "pointer";

// Cập nhật trạng thái nút
function updateButtonText() {
  const mode = document.designMode === "on" ? "ON ✅" : "OFF ❌";
  btn.textContent = `DesignMode: ${mode}`;
}

// Xử lý bật/tắt designMode
btn.onclick = () => {
  document.designMode = document.designMode === "on" ? "off" : "on";
  updateButtonText();
};

// Khởi tạo nút
updateButtonText();
menu.appendChild(btn);
document.body.appendChild(menu);

// Kéo thả menu
let isDragging = false, offsetX, offsetY;

menu.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - menu.offsetLeft;
  offsetY = e.clientY - menu.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    menu.style.left = `${e.clientX - offsetX}px`;
    menu.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
