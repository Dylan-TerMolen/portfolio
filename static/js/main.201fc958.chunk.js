(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{29:function(e,t,r){e.exports=r(41)},34:function(e,t,r){},40:function(e,t,r){},41:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(16),s=r.n(o),i=(r(34),r(9)),c=r(7),l=r(10),u=r(11),h=r(12),m=r(59),p=r(56),d=r(57),v=r(58),b=r(26),f=r.n(b),w=r(27),k=r.n(w),O=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(m.a,{position:"static"},n.a.createElement(p.a,null,n.a.createElement(d.a,{variant:"title",color:"inherit"},"Dylan TerMolen's Portfolio | Currently a Work in Progress"),n.a.createElement("span",null,n.a.createElement(v.a,{href:"https://www.linkedin.com/in/dylan-termolen-748048170/",color:"inherit","aria-label":"Save"},n.a.createElement(f.a,null)),n.a.createElement(v.a,{href:"https://github.com/Dylan-TerMolen",color:"inherit","aria-label":"More Options"},n.a.createElement(k.a,null)))))}}]),t}(a.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="square";return this.props.isCurrent&&(e+=" square-current"),this.props.isInRow&&(e+=" square-in-row"),"CONTROL"===this.props.letter&&(e="square square-black"),n.a.createElement("div",{className:e},"CONTROL"!==this.props.letter?this.props.letter:"")}}]),t}(a.Component),E=(r(40),function(e){function t(e){var r;return Object(i.a)(this,t),(r=Object(l.a)(this,Object(u.a)(t).call(this,e))).makeBoard=function(e,t,r){for(var a=[],n=0;n<t;n++){a[n]=[];for(var o=0;o<e;o++)a[n][o]=r}return a},r.setBoard=function(e,t,a){var n=r.state.board;n[t][e]=a.toUpperCase(),r.setState({board:n})},r.moveUser=function(e,t){var a=r.state.userX,n=r.state.userY;1===e&&0===t?a!==r.props.width-1&&r.setState({userX:a+1}):-1===e&&0===t?0!==a&&r.setState({userX:a-1}):0===e&&1===t?0!==n&&r.setState({userY:n-1}):0===e&&-1===t&&n!==r.props.height-1&&r.setState({userY:n+1})},r.handleKeyDown=function(e){var t=e.key,a=r.state.userX,n=r.state.userY;switch(t){case"ArrowLeft":r.moveUser(-1,0);break;case"ArrowRight":r.moveUser(1,0);break;case"ArrowUp":r.moveUser(0,1);break;case"ArrowDown":r.moveUser(0,-1);break;case"Enter":r.setState({isHorizontal:!r.state.isHorizontal});break;case"Shift":break;case"Backspace":r.setBoard(a,n,""),r.state.isHorizontal?r.moveUser(-1,0):r.moveUser(0,1);break;case"Meta":break;default:r.setBoard(a,n,t),r.state.isHorizontal?r.moveUser(1,0):r.moveUser(0,-1)}},r.state={board:r.makeBoard(r.props.width,r.props.height," "),userX:0,userY:0,isHorizontal:!0},r}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"board"},this.state.board.map((function(t,r){return n.a.createElement("div",{className:"row",key:r},t.map((function(t,a){var o=e.state.userX,s=e.state.userY,i=!1,c=o===a&&s===r;return e.state.isHorizontal?a!==o&&r===s&&(i=!0):a===o&&r!==s&&(i=!0),n.a.createElement(y,{letter:t,isCurrent:c,isInRow:i,key:a})})))})))}}]),t}(a.Component)),j=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(O,null),n.a.createElement(E,{width:"15",height:"15"}))}}]),t}(a.Component);var U=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.201fc958.chunk.js.map