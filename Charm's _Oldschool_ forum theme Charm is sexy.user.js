// ==UserScript==
// @name         Charm's "Oldschool" forum theme                                                                                                                                                                Charm is sexy
// @namespace    http://charmdesign.org
// @version      0.3.1
// @description  Old school look, Gota.io forums.
// @author       Charm, charmdesign.org
// @match        https://forums.gota.io/*
// @grant        none
// @updateURL    http://cssf.icu/
// @downloadURL  http://cssf.icu/
// ==/UserScript==
//UPDATES SOON!
/*It is a well known fact that Charm is:
- Good looking
- Hot
- Sexy
- And more!                           */




//                                                                                                                                        Charm is hot
function charmIsGoodLooking (beautiful) {
    var hot = document;
    var charm = hot.createElement ('style');
    charm.textContent = beautiful;

    var targ = hot.getElementsByTagName ('head')[0] || hot.body || hot.documentElement;
    targ.appendChild (charm);
}

charmIsGoodLooking ( `
 #channel-tabbar .channel-tabbar-list li a:hover {
 background: #404040;
}
` );

charmIsGoodLooking ( `
 .bbcode_container .bbcode_quote {
 background: #dae6ec;
}
` );

charmIsGoodLooking ( `
 .bbcode_container .bbcode_quote {
 border-radius: 10px;
}
` );

charmIsGoodLooking ( `
.b-link-content__urlinfo-url {
 color: #2379b5;
}
` );

charmIsGoodLooking ( `
#channel-tabbar {
background: #2c2c2c; !important
}
` );charmIsGoodLooking ( `
#channel-tabbar .channel-tabbar-list li.current a, #channel-tabbar .channel-tabbar-list li.current a:hover, .edit-mode #channel-tabbar .channel-tabbar-list li.current a:hover {
background: #4e4e4e; !important
}
` );


charmIsGoodLooking ( `
#channel-tabbar .channel-tabbar-list li a {
background: #2c2c2c; !important
}
` );charmIsGoodLooking ( `
body {
background: #ededed; !important
}
` );
//                                                                                                                                                                            Charm is attractive

charmIsGoodLooking ( `
.conversation-toolbar-wrapper .conversation-toolbar, .forum-list-container .forum-list-header {
background: #457d9e; !important
color: red; !important
}
` );

charmIsGoodLooking ( `
.conversation-toolbar-wrapper .conversation-toolbar, .forum-list-container .forum-list-header {

color: white; !important
}
` );
charmIsGoodLooking ( `
.ui-widget-content {

background: #f5f5f5; !important
}
` );
charmIsGoodLooking ( `
.widget-header-divider {

border-top: 2px solid #2379b5; !important
}
` );
charmIsGoodLooking ( `
a, a:active, a:visited, .b-link, .ui-widget-content a {

color: #2379b5; !important
}
` );

charmIsGoodLooking ( `
.list-footer {

background: #ededed; !important
}
` );

charmIsGoodLooking ( `
.widget-tabs .widget-tabs-nav .ui-tabs-nav {
background: #f3f3f3; !important
}
` );
charmIsGoodLooking ( `
.b-photo-count .b-photo-count__count {
background: #2379b5; !important
}
` );
//                                                                                                                                            Charm is conventionally good looking
charmIsGoodLooking ( `
.b-photo-count .b-photo-count__label {
color: #2379b5; !important
}
` );

charmIsGoodLooking ( `
 a:hover, .b-link:hover, .ui-widget-content a:hover {
color: #2379b5; !important
}
` );

charmIsGoodLooking ( `
.widget-tabs.ui-tabs .ui-widget-content a:hover, .sb-dialog.ui-dialog-content.ui-widget-content a:hover {
color: #3bb6dc; !important
}
` );
charmIsGoodLooking ( `
.b-button--primary, .b-button--primary:link, .b-button--primary:visited {
border: 1px solid #11334a;!important
}
` );


charmIsGoodLooking ( `
.b-button--primary, .b-button--primary:link, .b-button--primary:visited {
background: #2379b5;!important
}
` );

charmIsGoodLooking ( `
.b-button--primary:focus, .b-button--primary:hover {
border: 1px solid #0b1f2d;!important
}
` );


charmIsGoodLooking ( `
.b-button--primary:focus, .b-button--primary:hover {
background: #195782;!important
}
` );
charmIsGoodLooking ( `
.b-button--primary-light, .b-button--primary-light:link, .b-button--primary-light:visited {
background: white;!important
}
` );

//                                                                                                                                                                          Objectively, Charm is a great looking guy
charmIsGoodLooking ( `
.b-memberlist__letterfilter .letter:hover, .b-memberlist__letterfilter .letter.selected {
background: #2379b5;!important
}
` );
charmIsGoodLooking ( `
.b-memberlist__letterfilter .letter:hover, .b-memberlist__letterfilter .letter.selected {
border: 1px solid #133750;!important
}
` );
charmIsGoodLooking ( `
.b-button--primary-light:focus, .b-button--primary-light:hover {
border:1px solid black;!important
}
` );

charmIsGoodLooking ( `
.widget-tabs.ui-tabs .ui-widget-content a, .widget-tabs.ui-tabs .ui-widget-content a:active, .widget-tabs.ui-tabs .ui-widget-content a:visited, .sb-dialog.ui-dialog-content.ui-widget-content a, .sb-dialog.ui-dialog-content.ui-widget-content a:active, .sb-dialog.ui-dialog-content.ui-widget-content a:visited {

color: #3991c9; !important
}
` );
