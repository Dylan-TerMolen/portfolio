(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{29:function(e,t,a){e.exports=a(41)},34:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(16),s=a.n(o),i=(a(34),a(9)),c=a(7),l=a(10),u=a(11),h=a(12),m=a(59),p=a(56),d=a(57),v=a(58),b=a(26),f=a.n(b),w=a(27),k=a.n(w),O=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(m.a,{position:"static"},n.a.createElement(p.a,null,n.a.createElement(d.a,{variant:"title",color:"inherit"},"Dylan TerMolen's Portfolio"),n.a.createElement(d.a,{variant:"title",color:"inherit"},"Currently a WIP"),n.a.createElement("span",null,n.a.createElement(v.a,{href:"https://www.linkedin.com/in/dylan-termolen-748048170/",color:"inherit","aria-label":"Save"},n.a.createElement(f.a,null)),n.a.createElement(v.a,{href:"https://github.com/Dylan-TerMolen",color:"inherit","aria-label":"More Options"},n.a.createElement(k.a,null)))))}}]),t}(r.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="square";return this.props.isCurrent&&(e+=" square-current"),this.props.isInRow&&(e+=" square-in-row"),"CONTROL"===this.props.letter&&(e="square square-black"),n.a.createElement("div",{className:e},"CONTROL"!==this.props.letter?this.props.letter:"")}}]),t}(r.Component),E=(a(40),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).makeBoard=function(e,t,a){for(var r=[],n=0;n<t;n++){r[n]=[];for(var o=0;o<e;o++)r[n][o]=a}return r},a.setBoard=function(e,t,r){var n=a.state.board;n[t][e]=r.toUpperCase(),a.setState({board:n})},a.moveUser=function(e,t){var r=a.state.userX,n=a.state.userY;1===e&&0===t?r!==a.props.width-1&&a.setState({userX:r+1}):-1===e&&0===t?0!==r&&a.setState({userX:r-1}):0===e&&1===t?0!==n&&a.setState({userY:n-1}):0===e&&-1===t&&n!==a.props.height-1&&a.setState({userY:n+1})},a.handleKeyDown=function(e){var t=e.key,r=a.state.userX,n=a.state.userY;switch(t){case"ArrowLeft":a.moveUser(-1,0);break;case"ArrowRight":a.moveUser(1,0);break;case"ArrowUp":a.moveUser(0,1);break;case"ArrowDown":a.moveUser(0,-1);break;case"Enter":a.setState({isHorizontal:!a.state.isHorizontal});break;case"Shift":break;case"Backspace":a.setBoard(r,n,""),a.state.isHorizontal?a.moveUser(-1,0):a.moveUser(0,1);break;case"Meta":break;default:a.setBoard(r,n,t),a.state.isHorizontal?a.moveUser(1,0):a.moveUser(0,-1)}},a.state={board:a.makeBoard(a.props.width,a.props.height," "),userX:0,userY:0,isHorizontal:!0},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"board"},this.state.board.map((function(t,a){return n.a.createElement("div",{className:"row",key:a},t.map((function(t,r){var o=e.state.userX,s=e.state.userY,i=!1,c=o===r&&s===a;return e.state.isHorizontal?r!==o&&a===s&&(i=!0):r===o&&a!==s&&(i=!0),n.a.createElement(y,{letter:t,isCurrent:c,isInRow:i,key:r})})))})))}}]),t}(r.Component)),j=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(O,null),n.a.createElement(E,{width:"15",height:"15"}))}}]),t}(r.Component);var U=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.490a8f2d.chunk.js.map