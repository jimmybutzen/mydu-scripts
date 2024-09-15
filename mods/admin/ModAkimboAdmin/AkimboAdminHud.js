(()=>{"use strict";var __webpack_modules__={434:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});class AkimboDebugPanelTab{constructor(e,t){console.log(e,t);let n=createElement(e,"div",["container-full"]);t.HTMLNodes.debugContainer=n;let a=createElement(n,"h2",["sub-title"]);a.innerText="Debug Input",t.HTMLNodes.debugTitle=a;let o=createElement(n,"div",["debug-input"]);t.HTMLNodes.codeMirrorContainer=o;let l=CodeMirror(o,{lineNumbers:!0,mode:"javascript",theme:"monokai",lineWrapping:!0,autoRefresh:!0});t.HTMLNodes.editor=l,this.createButton(n,"Run JS",["dump-button"],(()=>this.runJS(t))),this.createButton(n,"Clear",["dump-button"],(()=>l.setValue(""))),this.createButton(n,"Copy JS Input",["dump-button"],(()=>this.copyToClipboard(l.getValue()))),t._logToDebugPanel=function(e){let n=t.HTMLNodes.debugOutput.getValue()+e+"\n";t.HTMLNodes.debugOutput.setValue(n),t.HTMLNodes.debugOutput.scrollTo(null,t.HTMLNodes.debugOutput.getScrollInfo().height)},this.createScriptSection(n,t),this.createDebugOutputSection(n,t),t._logToDebugPanel("Debug panel initialized.")}createButton(e,t,n,a){let o=createElement(e,"button",n);return o.innerText=t,o.addEventListener("click",a),o}runJS(that){const code=that.HTMLNodes.editor.getValue().trim();if(code)try{const result=eval(code);this.handleResult(result,that)}catch(e){that._logToDebugPanel(`Error: ${e.message}`)}else that._logToDebugPanel("Please enter JavaScript code to evaluate.")}handleResult(e,t){"object"==typeof e&&null!==e?e instanceof Map?t._logToDebugPanel(`Result: ${JSON.stringify(this.mapToObject(e),null,2)}`):Array.isArray(e)?t._logToDebugPanel(`Result: [\n  ${e.join(",\n  ")}\n]`):t._logToDebugPanel(`Result: ${JSON.stringify(e,null,2)}`):t._logToDebugPanel(`Result: ${e}`)}mapToObject(e){const t={};return e.forEach(((e,n)=>{t[n]=e})),t}_logToDebugPanel(e){let t=that.HTMLNodes.debugOutput.getValue()+e+"\n";that.HTMLNodes.debugOutput.setValue(t),that.HTMLNodes.debugOutput.scrollTo(null,that.HTMLNodes.debugOutput.getScrollInfo().height)}copyToClipboard(e){if(navigator.clipboard)navigator.clipboard.writeText(e).then((()=>{that._logToDebugPanel("Debug output copied to clipboard.")})).catch((e=>{that._logToDebugPanel("Failed to copy text: "+e)}));else{const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select();try{document.execCommand("copy"),that._logToDebugPanel("Debug output copied to clipboard.")}catch(e){that._logToDebugPanel("Failed to copy text: "+e)}document.body.removeChild(t)}}createScriptSection(e,t){let n=createElement(e,"h2",["sub-title"]);n.innerText="Fetch a loaded script",t.HTMLNodes.debugScriptTitle=n;let a=createElement(e,"input",["script-input"]);a.setAttribute("type","text"),a.setAttribute("placeholder","Enter script name or URL"),t.HTMLNodes.scriptInput=a,this.createButton(e,"Dump Script Content",["dump-button"],(()=>{const e=a.value.trim();e?(t._logToDebugPanel(`Fetching content for script: ${e}`),t.adminFunctions.dumpScriptContentByName(a,e,t)):t._logToDebugPanel("Please enter a script name or URL.")}))}createDebugOutputSection(e,t){let n=createElement(e,"h2",["sub-title"]);n.innerText="Debug Output",t.HTMLNodes.debugOuputTitle=n;let a=createElement(e,"div",["debug-input"]);t.HTMLNodes.debugcodeMirrorContainer=a;let o=CodeMirror(a,{lineNumbers:!0,mode:"javascript",theme:"monokai",lineWrapping:!0,autoRefresh:!0});t.HTMLNodes.debugOutput=o,this.createButton(e,"Clear Debug Output",["dump-button"],(()=>o.setValue(""))),this.createButton(e,"Copy Debug Output",["dump-button"],(()=>this.copyToClipboard(o.getValue())))}}const __WEBPACK_DEFAULT_EXPORT__=AkimboDebugPanelTab}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var __webpack_exports__={};class AkimboAdminFunctions{applyInjectedCss(e){let t=document.createElement("style");t.type="text/css",t.innerHTML=e,document.head.appendChild(t)}populatePlayerList(e,t){t.logData("Starting to populate selection menu");const n=t.HTMLNodes.playerSelectList;n.innerHTML="",e.length>0?(t.logData("Starting to populate selection menu"),e.forEach((e=>{t.logData(`Adding option for player: ${e.displayName}, ID: ${e.playerId}`);let a=document.createElement("li");a.classList.add("dropdown_item"),a.innerText=e.displayName,a.dataset.playerId=e.playerId,a.addEventListener("click",(()=>{t.HTMLNodes.playerSelectDropdown.innerText=e.displayName,t.HTMLNodes.selectedPlayerTitle.innerText="Interacting with player: "+e.displayName,n.classList.add("hide"),t.selectedPlayer=e.playerId,t.logData(t.selectedPlayer),t.logData(`Selected player: ${e.displayName} (ID: ${e.playerId})`)})),n.appendChild(a)})),n.classList.toggle("hide"),t.logData(t.HTMLNodes.playerSelectList.innerHTML)):t.logData("No players found in the list.")}outputCSSRules(e,t){}dumpScriptContentByName(e,t,n){let a="";n._logToDebugPanel(`Dumping content for script: ${t}\n`);const o=document.querySelectorAll("script");n._logToDebugPanel(`Number of script tags found: ${o.length}\n`);const l=Array.from(o).find((e=>e.src===t));if(l)n._logToDebugPanel(`Target script found: ${l.src}\n`),fetch(l.src).then((e=>(e.ok||n._logToDebugPanel(`Network response was not ok: ${e.statusText}`),e.text()))).then((e=>{a+=`/* ${l.src} */\n\n${e}\n\n`,n._logToDebugPanel("Content fetched successfully.\n"),n._logToDebugPanel(a)})).catch((e=>{n._logToDebugPanel(`Error fetching script content: ${e.message}\n`)}));else{n._logToDebugPanel("Script not found or is an inline script.\n"),n._logToDebugPanel("Searching for inline scripts...\n");const e=Array.from(o).find((e=>e.textContent.includes(t)));e?(n._logToDebugPanel("Inline script found. Displaying content...\n"),a+=`/* Inline script */\n\n${e.textContent}\n\n`,n._logToDebugPanel(a)):n._logToDebugPanel("Inline script not found.\n")}}}class AkimboAdminModInteractions{addTeleportDestination(e){!1!==e&&CPPMod.sendModAction("AkimboAdmin",3001,[],JSON.stringify({teleportName:e}))}ClaimOwnedTerritory(e){!1!==e&&CPPMod.sendModAction("AkimboAdmin",3002,[],JSON.stringify({tag:e}))}ClaimUnownedTerritory(e){!1!==e&&CPPMod.sendModAction("AkimboAdmin",3003,[],JSON.stringify({tag:e}))}searchForPlayer(e){!1!==e&&CPPMod.sendModAction("AkimboAdmin",3004,[],JSON.stringify({name:e}))}teleportToPlayer(e){!1!==e&&CPPMod.sendModAction("AkimboAdmin",3005,[],JSON.stringify({id:e}))}teleportPlayerHere(e){!1!==e&&CPPMod.sendModAction("AkimboAdmin",3006,[],JSON.stringify({id:e}))}teleportToCoordinates(e){!1!==e&&(akimboAdminHud.HTMLNodes.customPos.value="",CPPMod.sendModAction("AkimboAdmin",3007,[],JSON.stringify({pos:e})))}teleportPlayerToCoordinates(e){!1!==e&&CPPMod.sendModAction("AkimboAdmin",3008,[],JSON.stringify({pos:e}))}sendTeleportLocation(e){!1!==e&&CPPMod.sendModAction("AkimboAdmin",3009,[],JSON.stringify({tag:e}))}fillInventory(e){!1!==e&&CPPMod.sendModAction("AkimboAdmin",3010,[],JSON.stringify({id:e}))}fillPlayerInventory(e){!1!==e&&CPPMod.sendModAction("AkimboAdmin",3011,[],JSON.stringify({id:e}))}clearInventory(e){!1!==e&&CPPMod.sendModAction("AkimboAdmin",3012,[],JSON.stringify({id:e}))}clearPlayerInventory(e){!1!==e&&CPPMod.sendModAction("AkimboAdmin",3013,[],JSON.stringify({id:e}))}AddItemToInventory(e,t,n){!1!==e&&!1!==t&&CPPMod.sendModAction("AkimboAdmin",3014,[],JSON.stringify({id:e,itemId:t,quantity:n}))}AddItemToPlayerInventory(e,t,n){!1!==e&&!1!==t&&CPPMod.sendModAction("AkimboAdmin",3015,[],JSON.stringify({id:e,itemId:t,quantity:n}))}logData(e){!1!==e&&(this._logToDebugPanel(e),CPPMod.sendModAction("AkimboAdmin",888,[],JSON.stringify({data:e})))}}var AkimboDebugPanelTab=__webpack_require__(434);class AkimboItemPanelTab{constructor(e,t){this.createTabContent(e,t)}createTabContent(e,t){createElement(e,"h6",["panel_title"]).innerText="Items";const n=createElement(e,"div",["container-center"]),a=createElement(n,"div",["row-flex-center"]),o=createElement(a,"input",["player_search"]);o.type="text",o.placeholder="Search for items...";const l=createElement(a,"button",["dump-button"]);l.innerText="Search Item";const i=createElement(n,"div",["row-flex-center"]),r=createElement(i,"button",["dump-button"]);r.innerText="All Items To nanoPack";const s=createElement(i,"button",["dump-button"]);s.innerText="Give All Items To Player",r.addEventListener("click",(()=>{t.logData(`Adding all items to inventory : ${t.selectedPlayer}`),t.adminModInteraction.fillInventory(t.selectedPlayer)})),s.addEventListener("click",(()=>{t.logData(`Giving all items to Player: ${t.selectedPlayer}`),""!==t.selectedPlayer?t.adminModInteraction.fillPlayerInventory(t.selectedPlayer):t.logData("No player selected.")}));const c=createElement(n,"div",["row-flex-center"]),d=createElement(c,"button",["dump-button"]);d.innerText="Clear nanopack";const u=createElement(c,"button",["dump-button"]);u.innerText="Clear player nanopack",d.addEventListener("click",(()=>{t.logData("Clearing inventory"),t.adminModInteraction.clearInventory(t.selectedPlayer)})),u.addEventListener("click",(()=>{""!==t.selectedPlayer?(t.logData(`Clearing Inventory of player: ${t.selectedPlayer}`),t.adminModInteraction.clearPlayerInventory(t.selectedPlayer)):t.logData("No player selected.")}));const p=createElement(e,"div",["row-flex-center"]);l.addEventListener("click",(async()=>{p.innerHTML="";const e=await itemBank.getTypeIdListByName(o.value);for(const n of e){const e=await itemBank.getItemDefinition(n);if(e.isHidden||!itemBank.isItem(n))continue;const a=createElement(p,"div",["item-container"]);if(createElement(a,"h6",["panel_title"]).innerText=e.fullName,e.scale&&(createElement(a,"p",["panel_title"]).innerText=`Scale: ${e.scale}`),createElement(a,"p",["panel_title"]).innerText=`ParentTypeId: ${e.parentTypeId}`,e.iconFilename){const t=createElement(a,"div",["item-icon"]),n=createElement(t,"img",["icon-image"]);n.src=`/data/${e.iconFilename}`,n.alt=e.name,n.style.maxWidth="100px",n.style.maxHeight="100px"}const o=createElement(a,"div",["row-flex-center"]),l=createElement(o,"input",["player_search"]);l.type="number",l.min="1",l.placeholder="Amount";const i=createElement(a,"div",["row-flex-center"]),r=createElement(i,"button",["dump-button"]);r.innerText="Add to NanoPack",r.addEventListener("click",(async()=>{const n=parseInt(l.value,10);t.logData(`Adding Item To inventory: ${e.name}, ${n}`),t.adminModInteraction.AddItemToInventory(t.selectedPlayer,e.typeId,n),l.value=""}));const s=createElement(i,"button",["dump-button"]);s.innerText="Give To Player",s.addEventListener("click",(async()=>{const n=parseInt(l.value,10);isNaN(n)||n<=0?alert("Please enter a valid amount."):(""!==t.selectedPlayer?(t.logData(`Giving Item To player: ${t.selectedPlayer}, ${e.name}, ${n}`),t.adminModInteraction.AddItemToPlayerInventory(t.selectedPlayer,e.typeId,n)):t.logData("No player selected."),l.value="")}))}}))}}const tabs_AkimboItemPanelTab=AkimboItemPanelTab;class PlayerTeleportTab{constructor(e,t){this.createPlayerTeleportPanel(e,t)}createPlayerTeleportPanel(e,t){t.HTMLNodes.player_TP_Title=createElement(e,"h5",["panel_title"]),t.HTMLNodes.player_TP_Title.innerText="Player Teleport panel";let n=createElement(e,"div",["container-center"]),a=createElement(n,"div",["row-flex-center"]);(t.HTMLNodes.player_tp_btn=createElement(a,"button",["dump-button"])).innerText="Teleport To Player",t.HTMLNodes.player_tp_btn.addEventListener("click",(()=>{t.logData(`Selected Player: ${t.selectedPlayer}`),""!==t.selectedPlayer?(t.logData(`Teleporting to player: ${t.selectedPlayer}`),t.adminModInteraction.teleportToPlayer(t.selectedPlayer),setTimeout((()=>{t._close()}),2e3)):t.logData("No player selected.")})),(t.HTMLNodes.player_fp_btn=createElement(a,"button",["dump-button"])).innerText="Teleport Player Here",t.HTMLNodes.player_fp_btn.addEventListener("click",(()=>{t.logData(`Selected Player: ${t.selectedPlayer}`),""!==t.selectedPlayer?(t.logData(`Teleporting player here: ${t.selectedPlayer}`),t.adminModInteraction.teleportPlayerHere(t.selectedPlayer),setTimeout((()=>{t._close()}),2e3)):t.logData("No player selected.")})),t.HTMLNodes.player_TP_Title=createElement(e,"h5",["panel_title"]),t.HTMLNodes.player_TP_Title.innerText="Teleport location panel";let o=createElement(e,"div",["container-center"]);t.HTMLNodes.teleportButtons=createElement(o,"div",["buttons_container"]);const l=JSON.parse(teleportTags);t.selectedButton=null,l.forEach((e=>{let n=createElement(t.HTMLNodes.teleportButtons,"button",["teleport_button"]);n.innerText=e,n.addEventListener("click",(()=>{t.selectedButton&&t.selectedButton.classList.remove("selected"),n.classList.add("selected"),t.selectedButton=n,t.selectedTag=e}))}));let i=createElement(o,"div",["row-flex-center"]);(t.HTMLNodes.confirmButton=createElement(i,"button",["dump-button"])).innerText="Teleport To Location",t.HTMLNodes.confirmButton.addEventListener("click",(()=>{t.selectedTag?(t.adminModInteraction.sendTeleportLocation(t.selectedTag),t.logData(`Teleporting to ${t.selectedTag}`),setTimeout((()=>{t._close()}),5e3)):t.logData("No destination selected.")})),t.HTMLNodes.add_tp_location=createElement(e,"h5",["panel_title"]),t.HTMLNodes.add_tp_location.innerText="Add a teleport location";let r=createElement(e,"div",["container-center"]),s=createElement(r,"div",["row-flex-center"]),c=createElement(s,"input",["player_search"]);c.type="text",c.placeholder="location name",t.HTMLNodes.addTpInput=c;let d=createElement(s,"button",["dump-button"]);d.innerText="add",d.addEventListener("click",(()=>{const e=t.HTMLNodes.addTpInput.value.trim();if(e){t.logData(`Adding location: ${e}`),t.adminModInteraction.addTeleportDestination(e),l.push(e);let n=createElement(t.HTMLNodes.teleportButtons,"button",["teleport_button"]);n.innerText=e,n.addEventListener("click",(()=>{t.selectedButton&&t.selectedButton.classList.remove("selected"),n.classList.add("selected"),t.selectedButton=n,t.selectedTag=e})),t.HTMLNodes.addTpInput.value=""}else t.logData("Please enter a location name.")})),t.HTMLNodes.player_POS_Title=createElement(e,"h5",["panel_title"]),t.HTMLNodes.player_POS_Title.innerText="Teleport To Custom Pos:";let u=createElement(e,"div",["container-center"]),p=createElement(u,"div",["row-flex-center"]),m=createElement(p,"input",["player_search"]);m.type="text",m.placeholder="Enter custom POS:",t.HTMLNodes.customPos=m;let T=createElement(p,"button",["dump-button"]);T.innerText="Teleport to POS",T.addEventListener("click",(()=>{const e=t.HTMLNodes.customPos.value.trim();e?(t.logData(`Searching for pos: ${e}`),t.adminModInteraction.teleportToCoordinates(e)):t.logData("Please enter a POS to teleport.")}));let b=createElement(p,"button",["dump-button"]);b.innerText="Teleport player to POS",b.addEventListener("click",(()=>{const e=t.HTMLNodes.customPos.value.trim();e?(t.logData(`Searching for pos: ${e}`),t.adminModInteraction.teleportPlayerToCoordinates(e)):t.logData("Please enter a player name to search.")})),createElement(e,"div",["row-flex-center"])}}const tabs_PlayerTeleportTab=PlayerTeleportTab;class AkimboGeneralPanelTab{constructor(e,t){this.createAkimboGeneralPanelTab(e,t)}createAkimboGeneralPanelTab(e,t){createElement(e,"h6",["panel_title"]).innerText="General",createElement(e,"p",["panel_title"]).innerText="Interact with player";let n=createElement(e,"div",["container-center"]),a=createElement(n,"div",["row-flex-center"]),o=createElement(a,"input",["player_search"]);o.type="text",o.placeholder="Search Player",t.HTMLNodes.newPlayerInput=o;let l=createElement(a,"button",["dump-button"]);l.innerText="Search...",l.addEventListener("click",(()=>{const e=t.HTMLNodes.newPlayerInput.value.trim();e?(t.logData(`Searching for player: ${e}`),t.logData("dropdownlist"+t.HTMLNodes.playerSelectDropdown),t.adminModInteraction.searchForPlayer(e)):t.logData("Please enter a player name to search.")}));let i=createElement(n,"div",["custom_select_body"]),r=createElement(i,"div",["custom_dropdown"]);t.HTMLNodes.playerSelectDropdown=r,t.HTMLNodes.playerSelectDropdown.innerText="Select a Player";let s=createElement(i,"ul",["dropdown_list","hide"]);t.HTMLNodes.playerSelectList=s,r.addEventListener("click",(()=>{s.classList.toggle("hide")}));let c=createElement(n,"div",["row-flex-center"]);(t.HTMLNodes.interact_reset_btn=createElement(c,"button",["dump-button"])).innerText="Reset Interaction",t.HTMLNodes.interact_reset_btn.addEventListener("click",(()=>{t.selectedPlayer="",t.HTMLNodes.selectedPlayerTitle.innerText="Interacting with player: none"}));let d=createElement(e,"div",["container-center"]);t.HTMLNodes.TerritoryManagement_Title=createElement(d,"h5",["panel_title"]),t.HTMLNodes.TerritoryManagement_Title.innerText="Territory Management";let u=createElement(d,"div",["row-flex-center"]),p=createElement(u,"button",["dump-button"]);p.innerText="Take over owned Territory",p.addEventListener("click",(()=>{t.logData("Taking over owned territory"),t.adminModInteraction.ClaimOwnedTerritory()}));let m=createElement(u,"button",["dump-button"]);m.innerText="Take over unowned Territory",m.addEventListener("click",(()=>{t.logData("Taking over owned territory"),t.adminModInteraction.ClaimUnownedTerritory()}))}}const tabs_AkimboGeneralPanelTab=AkimboGeneralPanelTab;class AkimboSettingsPanelTab{constructor(e,t){this.createSettingPanelTab(e,t)}createSettingPanelTab(e,t){let n=createElement(e,"div",["container-full"]);createElement(n,"h2",["sub-title"]).innerText="Settings"}}const tabs_AkimboSettingsPanelTab=AkimboSettingsPanelTab;class AkimboAdminHud extends MousePage{constructor(){super(),this.adminFunctions=new AkimboAdminFunctions,this.adminModInteraction=new AkimboAdminModInteractions,this._createHTML(),this.logData=this.adminModInteraction.logData,this.wrapperNode.classList.add("hide"),this.notificationIcon=new NotificationIconComponent("icon_repair_unit","akimboAdmin");var e=this;this.notificationIcon.onClickEvent.subscribe((()=>e.show(!0))),hudManager.addNotificationIcon(this.notificationIcon),this.notificationIcon.HTMLNodes.icon.innerText="A",engine.on("AkimboAdminHud.show",this.showIt,this),engine.on("AkimboAdminHud.setPlayers",this.setPlayers,this),"undefined"!=typeof injectedCss&&this.adminFunctions.applyInjectedCss(injectedCss)}setPlayers(e){this.logData("received: "+e);const t=JSON.parse(e);this.adminFunctions.populatePlayerList(t.players,this)}showIt(e){e?(hudManager.toggleEnhancedMouse(),this.show(!0)):this.show(!1)}show(e){super.show(e)}_onVisibilityChange(){super._onVisibilityChange(),this.wrapperNode.classList.toggle("hide",!this.isVisible),this.isVisible&&inputCaptureManager.captureText(!0,(()=>this._close())),this.isVisible||inputCaptureManager.captureText(!1)}_close(){this.show(!1),hudManager.toggleEnhancedMouse()}_createHTML(){this.HTMLNodes={},this.wrapperNode=createElement(document.body,"div",["AkimboAdminHud_panel"]);let e=createElement(this.wrapperNode,"div",["AkimboAdminHud_header"]);this.HTMLNodes.panelTitle=createElement(e,"h5",["panel_title"]),this.HTMLNodes.panelTitle.innerText="Akimbo Admin HUD",this.HTMLNodes.selectedPlayerTitle=createElement(e,"h5",["panel_title"]),this.HTMLNodes.selectedPlayerTitle.innerText="Interacting with player: none",this.HTMLNodes.closeIconButton=createElement(e,"button",["close_button"]),this.HTMLNodes.closeIconButton.innerText="Close",this.HTMLNodes.closeIconButton.addEventListener("click",(()=>this._close()));let t=createElement(this.wrapperNode,"div",["tab-nav"]);this.HTMLNodes.tab1=createElement(t,"a",["tab-link","active"]),this.HTMLNodes.tab1.innerText="General",this.HTMLNodes.tab1.href="#tab1",this.HTMLNodes.tab2=createElement(t,"a",["tab-link"]),this.HTMLNodes.tab2.innerText="Teleportation",this.HTMLNodes.tab2.href="#tab2",this.HTMLNodes.tab3=createElement(t,"a",["tab-link"]),this.HTMLNodes.tab3.innerText="Items",this.HTMLNodes.tab3.href="#tab3",this.HTMLNodes.tab4=createElement(t,"a",["tab-link"]),this.HTMLNodes.tab4.innerText="Debug",this.HTMLNodes.tab4.href="#tab4",this.HTMLNodes.tab5=createElement(t,"a",["tab-link"]),this.HTMLNodes.tab5.innerText="Settings",this.HTMLNodes.tab5.href="#tab5";let n=createElement(this.wrapperNode,"div",["tab-content"]),a=createElement(n,"div",["tab-pane","active"]);a.id="tab1";let o=createElement(n,"div",["tab-pane"]);o.id="tab2";let l=createElement(n,"div",["tab-pane"]);l.id="tab3";let i=createElement(n,"div",["tab-pane"]);i.id="tab4";let r=createElement(n,"div",["tab-pane"]);r.id="tab5",this.DebugPanel=new AkimboDebugPanelTab.A(i,this),this.GeneralPanel=new tabs_AkimboGeneralPanelTab(a,this),this.TeleportPanel=new tabs_PlayerTeleportTab(o,this),this.ItemPanel=new tabs_AkimboItemPanelTab(l,this),this.SettingPanel=new tabs_AkimboSettingsPanelTab(r,this),this._addTabFunctionality()}_addTabFunctionality(){const e=document.querySelectorAll(".tab-link"),t=document.querySelectorAll(".tab-pane");e.forEach((n=>{n.addEventListener("click",(a=>{a.preventDefault();const o=n.getAttribute("href").substring(1);e.forEach((e=>e.classList.remove("active"))),t.forEach((e=>e.classList.remove("active"))),n.classList.add("active"),document.getElementById(o).classList.add("active")}))}))}dumpData(){this.adminFunctions.outputCSSRules(tabPane,that),outputDiv&&outputDiv.textContent.trim()?this.dumpData(outputDiv.textContent):console.log("No CSS data found.")}}let AkimboAdminHud_akimboAdminHud=new AkimboAdminHud})();