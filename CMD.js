(() => {
  // Các lệnh có sẵn
  const commands = ["/bg", "/hide", "/show", "/alert", "/clear", "/title", "/reload", "/console", "/exit", "/destroy", "/reset", "/designmode", "/help", "/color", "/link", "/linkset"];
  let user = "hacker";

  // Tạo nút mở terminal
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "🟢 Terminal";
  Object.assign(toggleBtn.style, {
    position: "fixed",
    bottom: "10px",
    right: "10px",
    zIndex: 9999,
    padding: "6px 12px",
    background: "#000",
    color: "#0ff",
    border: "1px solid #0ff",
    fontFamily: "monospace",
    cursor: "pointer",
  });
  document.body.appendChild(toggleBtn);

  // Tạo menu terminal
  const menu = document.createElement("div");
  Object.assign(menu.style, {
    position: "fixed",
    top: "100px",
    left: "100px",
    width: "360px",
    background: "#000",
    color: "#0f0",
    border: "2px solid #0f0",
    borderRadius: "8px",
    fontFamily: "monospace",
    padding: "10px",
    zIndex: 9999,
    boxShadow: "0 0 10px #0f0",
    display: "none",
  });
  document.body.appendChild(menu);

  // Output terminal
  const output = document.createElement("div");
  output.style.height = "200px";
  output.style.overflowY = "auto";
  output.style.whiteSpace = "pre-wrap";
  output.textContent = `${user}@web:~$ Hack CMD V3 loaded...\n`;
  menu.appendChild(output);

  // Prompt + input
  const promptLine = document.createElement("div");
  promptLine.style.display = "flex";
  promptLine.style.alignItems = "center";
  const promptText = document.createElement("span");
  promptText.textContent = `${user}@web:~$ `;
  promptText.style.marginRight = "4px";
  const input = document.createElement("input");
  Object.assign(input.style, {
    flex: 1,
    background: "#000",
    color: "#0f0",
    border: "none",
    fontFamily: "monospace",
    outline: "none",
  });
  promptLine.appendChild(promptText);
  promptLine.appendChild(input);
  menu.appendChild(promptLine);

  // Toggle terminal hiển thị
  toggleBtn.onclick = () => {
    menu.style.display = menu.style.display === "none" ? "block" : "none";
    input.focus();
  };

  // Hàm log ra terminal
  function log(msg) {
    output.textContent += msg + "\n";
    output.scrollTop = output.scrollHeight;
  }

  // Biến menu design mode để quản lý
  let designModeMenu = null;

  // Biến menu destroyer để quản lý
  let destroyerMenu = null;

  // Hàm tạo menu Design Mode
  function createDesignModeMenu() {
    if (designModeMenu) return;
    designModeMenu = document.createElement("div");
    Object.assign(designModeMenu.style, {
      position: "fixed",
      top: "50px",
      left: "50px",
      background: "#333",
      color: "white",
      padding: "12px",
      borderRadius: "10px",
      fontFamily: "sans-serif",
      cursor: "move",
      zIndex: 9999,
      userSelect: "none",
      boxShadow: "0 0 12px rgba(0,0,0,0.5)",
      fontWeight: "bold",
      fontSize: "20px",
      textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
    });
    designModeMenu.innerText = "Design Mode";

    const btn = document.createElement("button");
    Object.assign(btn.style, {
      marginTop: "12px",
      display: "block",
      width: "160px",
      height: "50px",
      fontSize: "16px",
      fontWeight: "bold",
      padding: "10px",
      border: "none",
      borderRadius: "8px",
      background: "#0c7",
      color: "white",
      cursor: "pointer",
    });

    function updateButtonText() {
      const mode = document.designMode === "on" ? "ON ✅" : "OFF ❌";
      btn.textContent = `DesignMode: ${mode}`;
    }

    btn.onclick = () => {
      document.designMode = document.designMode === "on" ? "off" : "on";
      updateButtonText();
    };

    updateButtonText();

    designModeMenu.appendChild(btn);
    document.body.appendChild(designModeMenu);

    // Kéo thả menu Design Mode
    let isDragging = false,
      offsetX,
      offsetY;

    designModeMenu.addEventListener("mousedown", (e) => {
      if (e.target === btn) return;
      isDragging = true;
      offsetX = e.clientX - designModeMenu.offsetLeft;
      offsetY = e.clientY - designModeMenu.offsetTop;
    });
    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        designModeMenu.style.left = `${e.clientX - offsetX}px`;
        designModeMenu.style.top = `${e.clientY - offsetY}px`;
      }
    });
    document.addEventListener("mouseup", () => {
      isDragging = false;
    });
  }

  // Hàm tạo menu Destroyer
  function createDestroyerMenu() {
    if (destroyerMenu) return;

    destroyerMenu = document.createElement("div");
    Object.assign(destroyerMenu.style, {
      position: "fixed",
      top: "50px",
      left: "50px",
      background: "#333",
      color: "white",
      padding: "12px",
      borderRadius: "10px",
      fontFamily: "sans-serif",
      cursor: "move",
      zIndex: 9999,
      userSelect: "none",
      boxShadow: "0 0 12px rgba(0,0,0,0.5)",
      fontWeight: "bold",
      fontSize: "20px",
      textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
    });
    destroyerMenu.innerText = "Destroyer";

    const btn = document.createElement("button");
    btn.textContent = "Phá hủy trang";
    Object.assign(btn.style, {
      marginTop: "12px",
      display: "block",
      width: "160px",
      height: "50px",
      fontSize: "16px",
      fontWeight: "bold",
      padding: "10px",
      border: "none",
      borderRadius: "8px",
      background: "#900",
      color: "white",
      cursor: "pointer",
    });

    const img666 =
      "data:image/svg+xml;base64," +
      btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <rect width="200" height="200" fill="white"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="120" font-family="Arial" fill="red">666</text>
      </svg>
    `);

    function replaceTextWith666(node) {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0) {
        node.textContent = "666";
      } else {
        node.childNodes.forEach(replaceTextWith666);
      }
    }

    let flashingInterval, shakingInterval;

    function stopEffects() {
      if (flashingInterval) clearInterval(flashingInterval);
      if (shakingInterval) clearInterval(shakingInterval);
      document.body.style.transform = "";
      document.body.style.background = "";
      document.body.style.color = "";
    }

    btn.onclick = () => {
      stopEffects();
      replaceTextWith666(document.body);
      document.querySelectorAll("img").forEach((img) => (img.src = img666));

      let toggle = false;
      flashingInterval = setInterval(() => {
        document.body.style.background = toggle ? "black" : "red";
        document.body.style.color = toggle ? "red" : "black";
        toggle = !toggle;
      }, 500);

      shakingInterval = setInterval(() => {
        const amp = 5;
        const x = (Math.random() - 0.5) * amp * 2;
        const y = (Math.random() - 0.5) * amp * 2;
        document.body.style.transform = `translate(${x}px, ${y}px)`;
      }, 50);
    };

    destroyerMenu.appendChild(btn);
    document.body.appendChild(destroyerMenu);

    // Kéo thả menu Destroyer
    let isDragging = false,
      offsetX,
      offsetY;

    destroyerMenu.addEventListener("mousedown", (e) => {
      isDragging = true;
      offsetX = e.clientX - destroyerMenu.offsetLeft;
      offsetY = e.clientY - destroyerMenu.offsetTop;
    });
    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        destroyerMenu.style.left = `${e.clientX - offsetX}px`;
        destroyerMenu.style.top = `${e.clientY - offsetY}px`;
      }
    });
    document.addEventListener("mouseup", () => {
      isDragging = false;
    });
  }

  // Xử lý nhập lệnh
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const command = input.value.trim();
      if (!command) return;
      log(`${user}@web:~$ ${command}`);
      input.value = "";
      processCommand(command);
    }
  });

  function processCommand(cmdRaw) {
    const cmd = cmdRaw.trim();
    const parts = cmd.split(" ");
    const mainCmd = parts[0].toLowerCase();

    switch (mainCmd) {
      case "/bg":
        if (parts[1]) {
          document.body.style.background = parts[1];
          log(`Background changed to ${parts[1]}`);
        } else {
          log("Usage: /bg [color]");
        }
        break;

      case "/hide":
        menu.style.display = "none";
        log("Terminal hidden. Use button to show.");
        break;

      case "/show":
        menu.style.display = "block";
        log("Terminal shown.");
        input.focus();
        break;

      case "/alert":
        if (parts.length > 1) {
          alert(parts.slice(1).join(" "));
          log("Alert displayed.");
        } else {
          log("Usage: /alert [message]");
        }
        break;

      case "/clear":
        output.textContent = "";
        break;

      case "/title":
        if (parts.length > 1) {
          document.title = parts.slice(1).join(" ");
          log(`Title changed to "${document.title}"`);
        } else {
          log("Usage: /title [new title]");
        }
        break;

      case "/reload":
      case "/reset":
        log("Reloading page...");
        setTimeout(() => location.reload(), 500);
        break;

      case "/console":
        log("Opening browser console...");
        console.log("Hack CMD V3 Console opened.");
        break;

      case "/exit":
        log("Exiting terminal...");
        menu.style.display = "none";
        break;

      case "/destroy":
        createDestroyerMenu();
        log("Destroyer menu created.");
        break;

      case "/designmode":
        createDesignModeMenu();
        log("DesignMode menu created.");
        break;

      case "/help":
        log("Commands:\n" +
            commands.join(", ") + 
            "\n\nUsage: /command [args]\nExamples:\n" +
            "/color red - Change terminal text color\n" +
            "/bg black - Change background color\n" +
            "/link cyan - Change all links color\n" +
            "/linkset a https://google.com - Change href of all <a> tags\n" +
            "/reload - Reload page\n" +
            "/destroy - Create Destroyer menu\n" +
            "/designmode - Create Design Mode menu\n" +
            "/hide, /show, /alert, /clear, /title, /exit, /console\n");
        break;

      case "/color":
        if (parts[1]) {
          output.style.color = parts[1];
          promptText.style.color = parts[1];
          input.style.color = parts[1];
          log(`Text color changed to ${parts[1]}`);
        } else {
          log("Usage: /color [color]");
        }
        break;

      case "/link":
        if (parts[1]) {
          document.querySelectorAll("a").forEach((a) => {
            a.style.color = parts[1];
          });
          log(`All links color changed to ${parts[1]}`);
        } else {
          log("Usage: /link [color]");
        }
        break;

      case "/linkset":
        if (parts.length >= 3) {
          const selector = parts[1];
          const newHref = parts.slice(2).join(" ");
          const els = document.querySelectorAll(selector);
          if (els.length === 0) {
            log(`No elements found for selector: ${selector}`);
          } else {
            let changed = 0;
            els.forEach((el) => {
              if (el.tagName.toLowerCase() === "a") {
                el.href = newHref;
                changed++;
              }
            });
            log(`Changed href of ${changed} <a> elements matching '${selector}' to ${newHref}`);
          }
        } else {
          log("Usage: /linkset [selector] [url]");
        }
        break;

      default:
        log(`Command not found: ${mainCmd}\nUse /help to see commands.`);
    }
  }
})();
