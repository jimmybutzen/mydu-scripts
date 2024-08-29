class TeleportPanel extends MousePage {
  constructor() {
    console.warn("TeleportPanel ctor");
    super();
    this._createHTML();
    this.wrapperNode.classList.add("hide");
    this.teleportTags = []; // Store teleportation tags here
    engine.on("TeleportPanel.show", this.show, this);
    this.fetchTeleportTags(); // Fetch existing teleport tags
  }

  show(isVisible) {
    console.warn("TeleportPanel show");
    super.show(isVisible);
    this._updateKeyboardCapture();
  }

  _onVisibilityChange() {
    super._onVisibilityChange();
    console.warn("OVC " + this.isVisible);
    this.wrapperNode.classList.toggle("hide", !this.isVisible);
    CPPInput.setCaptureKeyboard(!!this.isVisible);
    this._updateKeyboardCapture();
  }

  _close() {
    this.show(false);
  }

  _createHTML() {
    this.HTMLNodes = {};
    this.wrapperNode = createElement(document.body, "div", "mining_unit_panel");
    let header = createElement(this.wrapperNode, "div", "header");
    this.HTMLNodes.panelTitle = createElement(header, "div", "panel_title");
    this.HTMLNodes.panelTitle.innerText = "Teleport Panel";
    this.HTMLNodes.closeIconButton = createElement(header, "div", "close_button");
    this.HTMLNodes.closeIconButton.addEventListener("click", () => this._close());
    createSpriteSvg("icon_close", "icon_close", this.HTMLNodes.closeIconButton);
    let content = createElement(this.wrapperNode, "div", "content");
    content.style.display = 'block';

    // Content wrapper
    let wrapper = createElement(content, "div", "content_wrapper");
    
    // Input field
    this.HTMLNodes.qinput = createElement(wrapper, "input");
    this.HTMLNodes.qinput.type = "text";

    // Button to add teleport location
    let button = createElement(wrapper, "div", "generic_button");
    button.innerText = "Add location";
    button.addEventListener("click", () => this.addTeleportLocation());
    let wrapper2 = createElement(content, "div", "content_wrapper2");
    // List to display teleport tags
    this.HTMLNodes.teleportTagList = createElement(wrapper2, "ul", "teleport_tag_list");
  }

  addTeleportLocation() {
    let value = this.HTMLNodes.qinput.value;
    if (value) {
      CPPMod.sendModAction("NQ.TeleporterTagConfig", 1337, [], JSON.stringify({ teleportName: value }));
      this.teleportTags.push(value);
      this.updateTeleportTagList(); // Update the list after adding a new tag
    }
  }

  // Fetch existing teleport tags (this could be from a server, local storage, etc.)
  fetchTeleportTags() {
    // Example: Fetch tags from a server or local storage
    // Simulate fetching tags
    let existingTags = ["Tag1", "Tag2", "Tag3"];
    this.teleportTags = existingTags;
    this.updateTeleportTagList();
  }

  // Update the list of teleport tags
  updateTeleportTagList() {
    this.HTMLNodes.teleportTagList.innerHTML = ""; // Clear the list
    this.teleportTags.forEach(tag => {
      let listItem = createElement(this.HTMLNodes.teleportTagList, "li", "teleport_tag_item");
      listItem.innerText = tag;
    });
  }

  _updateKeyboardCapture() {
    CPPInput.setCaptureKeyboard(!!this.isVisible);
  }
}

let teleportPanel = new TeleportPanel();
