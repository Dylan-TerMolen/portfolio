(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{63:function(e,t,a){e.exports=a(81)},68:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),o=a.n(r),s=(a(68),a(15)),c=a(13),i=a(19),u=a(20),m=a(21),d=a(59),h=a(8),p=a(109),E=a(85),w=a(111),b=a(112),f=a(113),g=a(114),y=a(115),v=a(116),k=a(117),j=a(122),C=a(118),O=a(121),T=a(123),P=a(56),R=a.n(P),A=a(54),I=a(12),D=a(57),N=a.n(D),x=a(58),S=a.n(x),B=a(41),L=a.n(B),U=Object(A.a)((function(e){return{root:{display:"flex"},drawer:Object(h.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(h.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(h.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)}}}));var M=function(e){var t=this,a=e.container,n=U(),r=Object(I.a)(),o=l.a.useState(!1),s=Object(d.a)(o,2),c=s[0],i=s[1],u=function(){i(!c)},m=l.a.createElement("div",null,l.a.createElement("div",{className:n.toolbar}),l.a.createElement(p.a,null),l.a.createElement(E.a,null,l.a.createElement("b",null,"B.E. in Computer Engineering")),l.a.createElement(E.a,null,l.a.createElement("b",null,"Minor in Engineering Mangement")),l.a.createElement(E.a,null,l.a.createElement("b",null,"Certified Associate in Project Management")),l.a.createElement(p.a,null),l.a.createElement(w.a,null,l.a.createElement(E.a,null,l.a.createElement("b",null,"Skills")),["C++","Python","SQL","JavaScript"].map((function(e,t){return l.a.createElement(E.a,{key:e},e)}))),l.a.createElement(p.a,null),l.a.createElement(w.a,null,l.a.createElement(E.a,null,l.a.createElement("b",null,"Libraries and Frameworks")),["React","Django","Express","Pandas","Git / GitHub"].map((function(e,t){return l.a.createElement(E.a,{key:e},e)}))));return l.a.createElement("div",{className:n.root},l.a.createElement(b.a,null),l.a.createElement(f.a,{position:"fixed",className:n.appBar},l.a.createElement(g.a,null,l.a.createElement(y.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:u,className:n.menuButton},l.a.createElement(R.a,null)),l.a.createElement(v.a,{color:"inherit",style:{flex:1}},"Dylan TerMolen's Portfolio | In Development"),l.a.createElement("span",null,l.a.createElement(L.a,{variant:"popover",popupId:"demo-popup-menu"},(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(k.a,Object.assign({variant:"contained",color:"primary"},Object(B.bindTrigger)(e)),"See My Projects"),l.a.createElement(j.a,Object(B.bindMenu)(e),l.a.createElement(C.a,{id:"gan",onClick:function(a){return t.handleDropdownClick(a,e)}},"Crest GAN"),l.a.createElement(C.a,{id:"twfc",onClick:function(a){return t.handleDropdownClick(a,e)}},"Twitter FC"),l.a.createElement(C.a,{id:"crossword",onClick:function(a){return t.handleDropdownClick(a,e)}},"Crossword Interface")))})),l.a.createElement(y.a,{href:"https://www.linkedin.com/in/dylan-termolen-748048170/",color:"inherit","aria-label":"Save"},l.a.createElement(N.a,null)),l.a.createElement(y.a,{href:"https://github.com/Dylan-TerMolen",color:"inherit","aria-label":"More Options"},l.a.createElement(S.a,null))))),l.a.createElement("nav",{className:n.drawer,"aria-label":"mailbox folders"},l.a.createElement(O.a,{smUp:!0,implementation:"css"},l.a.createElement(T.a,{container:a,variant:"temporary",anchor:"rtl"===r.direction?"right":"left",open:c,onClose:u,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0}},m)),l.a.createElement(O.a,{xsDown:!0,implementation:"css"},l.a.createElement(T.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0},m))))},W=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="square";return this.props.isCurrent&&(e+=" square-current"),this.props.isInRow&&(e+=" square-in-row"),"CONTROL"===this.props.letter&&(e="square square-black"),l.a.createElement("div",{className:e,style:{width:"25px",height:"25px"}},"CONTROL"!==this.props.letter?this.props.letter:"")}}]),t}(n.Component),F=(a(80),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).makeBoard=function(e,t,a){for(var n=[],l=0;l<t;l++){n[l]=[];for(var r=0;r<e;r++)n[l][r]=a}return n},a.setBoard=function(e,t,n){var l=a.state.board;l[t][e]=n.toUpperCase(),a.setState({board:l})},a.moveUser=function(e,t){var n=a.state.userX,l=a.state.userY;1===e&&0===t?n!==a.props.width-1&&a.setState({userX:n+1}):-1===e&&0===t?0!==n&&a.setState({userX:n-1}):0===e&&1===t?0!==l&&a.setState({userY:l-1}):0===e&&-1===t&&l!==a.props.height-1&&a.setState({userY:l+1})},a.handleKeyDown=function(e){var t=e.key,n=a.state.userX,l=a.state.userY;switch(t){case"ArrowLeft":a.moveUser(-1,0);break;case"ArrowRight":a.moveUser(1,0);break;case"ArrowUp":a.moveUser(0,1);break;case"ArrowDown":a.moveUser(0,-1);break;case"Enter":a.setState({isHorizontal:!a.state.isHorizontal});break;case"Shift":break;case"Backspace":a.setBoard(n,l,""),a.state.isHorizontal?a.moveUser(-1,0):a.moveUser(0,1);break;case"Meta":break;default:a.setBoard(n,l,t),a.state.isHorizontal?a.moveUser(1,0):a.moveUser(0,-1)}},a.state={board:a.makeBoard(a.props.width,a.props.height," "),userX:0,userY:0,isHorizontal:!0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"board"},this.state.board.map((function(t,a){return l.a.createElement("div",{className:"row",key:a},t.map((function(t,n){var r=e.state.userX,o=e.state.userY,s=!1,c=r===n&&o===a;return e.state.isHorizontal?n!==r&&a===o&&(s=!0):n===r&&a!==o&&(s=!0),l.a.createElement(W,{letter:t,isCurrent:c,isInRow:s,key:n})})))})))}}]),t}(n.Component)),q=a(119),G=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(q.a,null,l.a.createElement("h1",{className:"code-line","data-line-start":"0","data-line-end":"1"},"Crest GAN"),l.a.createElement("p",{className:"has-line-data","data-line-start":"1","data-line-end":"2"},"Crest GAN is the name of my first project utilizing the TensorFlow  machine learning framework to create new images of soccer team crests based upon an existing dataset of soccer team crests. Throughout this process I learned about\u2026"),l.a.createElement("ul",null,l.a.createElement("li",{className:"has-line-data","data-line-start":"2","data-line-end":"3"},"Scraping online data using Python libraries"),l.a.createElement("li",{className:"has-line-data","data-line-start":"3","data-line-end":"4"},"Evaluating generative models based upon image outputs and loss functions"),l.a.createElement("li",{className:"has-line-data","data-line-start":"4","data-line-end":"6"},"Generative model architectures and the power of convolutional layers")),l.a.createElement("h1",{className:"code-line","data-line-start":"6","data-line-end":"7"},"Final Model"),l.a.createElement("pre",null,l.a.createElement("code",{className:"has-line-data","data-line-start":"8","data-line-end":"35"},"#Python3",l.a.createElement("br",null),"def create_discriminator_model():",l.a.createElement("br",null),"\u2003\u2003model = tf.keras.Sequential()",l.a.createElement("br",null),"\u2003\u2003input_shape = (120, 120, 3)",l.a.createElement("br",null),"\u2003\u2003dropout_prob = 0.4",l.a.createElement("br",null),l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Conv2D(64, 5, strides=2, input_shape=input_shape, padding='same'))",l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.LeakyReLU())",l.a.createElement("br",null),l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Conv2D(128, 5, strides=2, padding='same'))",l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.LeakyReLU())",l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Dropout(dropout_prob))",l.a.createElement("br",null),l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Conv2D(256, 5, strides=2, padding='same'))",l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.LeakyReLU())",l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Dropout(dropout_prob))",l.a.createElement("br",null),l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Conv2D(512, 5, strides=2, padding='same'))",l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.LeakyReLU())",l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Dropout(dropout_prob))",l.a.createElement("br",null),l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Flatten())",l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Dense(1))",l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Activation('sigmoid'))",l.a.createElement("br",null),l.a.createElement("br",null),"\u2003\u2003return model",l.a.createElement("br",null))),l.a.createElement("h1",{className:"code-line","data-line-start":"36","data-line-end":"37"},"Resources Used"),l.a.createElement("p",{className:"has-line-data","data-line-start":"38","data-line-end":"39"},"I used a number of open source libraries and frameworks to complete this project."))}}]),t}(n.Component),z=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,l.a.createElement("strong",null,"Twitter FC")),l.a.createElement("h2",null,l.a.createElement("strong",null,"Project Description ")),l.a.createElement("p",null,"I was able to take lead on this project as the Project Manager. I was responsible for laying out the steps of the project, the plan of execution, as well as doing a good amount of the coding required. The goal of our project was to streamline sports updates for people who may not want to go through the trouble of looking up each individual game, league, or score. As sports fans, we all love knowing the scores that we care about, but sometimes it can be a hassle to look the scores all up individually. When thinking about the best way to receive this information, we decided Twitter would be the best way, as it has over 330 million users and would allow users to view the information on a platform they are already using. We also wanted to make sure that the data retrieval process was entirely separate from the tweeting process. This allows for the program to be more modular as well as scalable. This will allow us to accrue less technical debt as the project goes on if we decide to continue and make this a business. This also allowed for us to complete the project faster as we were able to work on the separate classes at the same time and then quickly make them compatible with each other. In order to achieve our goal we used the Python tweepy library to interface our class with the Twitter API as well as the Python requests library to send http requests to get the soccer information that we needed. This project was a great learning experience that taught us about http requests, the importance of exception safety, and code modularization."),l.a.createElement("h2",null,l.a.createElement("strong",null,"Responsibility Matrix")),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Task"),l.a.createElement("td",null,"Dylan"),l.a.createElement("td",null,"George"),l.a.createElement("td",null,"Quinn")),l.a.createElement("tr",null,l.a.createElement("td",null,"Plan Project"),l.a.createElement("td",null,"R"),l.a.createElement("td",null,"R"),l.a.createElement("td",null,"R")),l.a.createElement("tr",null,l.a.createElement("td",null,"Set up Twitter account and get developer credentials"),l.a.createElement("td",null,"I"),l.a.createElement("td",null,"C"),l.a.createElement("td",null,"R")),l.a.createElement("tr",null,l.a.createElement("td",null,"Access data source for updated Soccer information"),l.a.createElement("td",null,"A"),l.a.createElement("td",null,"R"),l.a.createElement("td",null,"I")),l.a.createElement("tr",null,l.a.createElement("td",null,"Get everyone setup with Python"),l.a.createElement("td",null,"R"),l.a.createElement("td",null,"R"),l.a.createElement("td",null,"R")),l.a.createElement("tr",null,l.a.createElement("td",null,"Build Python Class for tweeting"),l.a.createElement("td",null,"R"),l.a.createElement("td",null,"I"),l.a.createElement("td",null,"C")),l.a.createElement("tr",null,l.a.createElement("td",null,"Build Python Class for getting data"),l.a.createElement("td",null,"C"),l.a.createElement("td",null,"I"),l.a.createElement("td",null,"R")),l.a.createElement("tr",null,l.a.createElement("td",null,"Connect the two classes"),l.a.createElement("td",null,"R"),l.a.createElement("td",null,"C"),l.a.createElement("td",null,"A")),l.a.createElement("tr",null,l.a.createElement("td",null,"Run tests"),l.a.createElement("td",null,"C"),l.a.createElement("td",null,"R"),l.a.createElement("td",null,"C")),l.a.createElement("tr",null,l.a.createElement("td",null,"Find server to run code daily"),l.a.createElement("td",null,"I"),l.a.createElement("td",null,"C"),l.a.createElement("td",null,"R")),l.a.createElement("tr",null,l.a.createElement("td",null,"Continue to monitor for errors"),l.a.createElement("td",null,"A"),l.a.createElement("td",null,"R"),l.a.createElement("td",null,"A"))),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("td",{colspan:"2"},"KEY")),l.a.createElement("tr",null,l.a.createElement("td",null,"R"),l.a.createElement("td",null,"Responsible")),l.a.createElement("tr",null,l.a.createElement("td",null,"I"),l.a.createElement("td",null,"Informed")),l.a.createElement("tr",null,l.a.createElement("td",null,"C"),l.a.createElement("td",null,"Consulted")),l.a.createElement("tr",null,l.a.createElement("td",null,"A"),l.a.createElement("td",null,"Accountable"))),l.a.createElement("h2",null,l.a.createElement("strong",null,"Attendance Log")),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Date")),l.a.createElement("td",null,"11/12"),l.a.createElement("td",null,"11/14"),l.a.createElement("td",null,"11/17"),l.a.createElement("td",null,"11/19"),l.a.createElement("td",null,"11/21"),l.a.createElement("td",null,"12/1")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"George")),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"X"),l.a.createElement("td",null,"\u2713")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Quinn")),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"X"),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"\u2713")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Dylan")),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"\u2713"))),l.a.createElement("p",null,"Our team had solid attendance for all of our meetings. Between the group members there were only two total misses in six meetings. This means our group had a cumulative attendance of 89%. Our attendance record helped us to work cohesively and split up the work equally."),l.a.createElement("h2",null,l.a.createElement("strong",null,"GANTT Chart")),l.a.createElement("p",null,l.a.createElement("img",{src:"https://i.ibb.co/kgX2BkF/image6.png",alt:"GANTT Chart",border:"0"})),l.a.createElement("h2",null,l.a.createElement("strong",null,"Program Flow Diagram")),l.a.createElement("p",null,l.a.createElement("img",{src:"https://i.ibb.co/w46LCpy/image7.png",alt:"Program Flow",border:"0"})),l.a.createElement("h2",null,l.a.createElement("strong",null,"Cost / Budget Information")),l.a.createElement("p",null,"We were able to take advantage of the wide variety of open source tools so that we could complete this project entirely free of charge."),l.a.createElement("p",null,l.a.createElement("strong",null,"Total Price: $0.00")),l.a.createElement("h2",null,l.a.createElement("strong",null,"Potential Sales of the Product/Project or Market Estimation ")),l.a.createElement("p",null,"There are multiple social media automation tools currently on the market that allow for users to schedule posts on social media sites like Twitter and Instagram. One of the most popular is buffer. Buffer charges $15 per month to allow for one user to schedule 100 posts across eight different accounts. We were able to complete this project free of charge, so I think we would certainly be able to undercut this competitor and still make a profit. One potential concern is that our costs would certainly rise above $0 as we begin to scale. In order to gain awareness for our product we would want to build a website and server costs would continue to grow as we got more users. I believe that we would be able to support 20 users a month giving them the same usage as buffer for the price of only $12 per month. A relatively powerful Amazon Web Services server would cost about $75 so with 20 users per month at $12 per user per month we would be making $240 - $75 = $165 per month. We would only be able to achieve this level of profit by putting in a lot of time into the project, but it is certainly achievable."),l.a.createElement("h2",null,l.a.createElement("strong",null,"Benefits of the Project ")),l.a.createElement("p",null,"This project has many benefits. The most obvious is the benefit to soccer fans who want to see soccer standings everyday on their twitter feed, without all the hassle of looking up standings for each league. However, the benefits of this project could very easily be applied to any number of applications. The most obvious are sports related. For example, our bot could tweet out scores, standings, or player stats for any sport. In addition, the bot can easily be modified to tweet daily, weekly, or in any other desired interval of time. It can even be programmed to tweet out only when there is an update from the last tweet, to avoid repetitive information."),l.a.createElement("h2",null,l.a.createElement("strong",null,"Problems We Encountered")),l.a.createElement("p",null,"One major problem we ran into was the lack of documentation for the libraries we wanted to use. We originally went with a different Twitter interfacing library but found it too difficult to use due to the lack of documentation on the code. Another problem we ran into was with exception handling. At times if the Soccer API was down or we received data that was a little unusual, the program would stop midway through the series of tweets. This would be a big problem because then maybe half of our standings would be tweeted and the others would be left out. This was solved during our testing phase where we located the common errors and prevented them to allow for the program to continue running."),l.a.createElement("p",null,"Another problem we ran into was the twitter character limit. Twitter limits its tweets to 280 characters, and therefore we could not all the teams from a league, and their points into one tweet. We solved this problem by only tweeting the current top 10 teams. This limited the information we were able to tweet, however it kept our tweets from getting messed up and looking sloppy."),l.a.createElement("h2",null,l.a.createElement("strong",null,"Future Work or Possibilities with the Project")),l.a.createElement("p",null,"There are many possible uses for Twitter Bots. As we talked about earlier, we could make a twitter bot that does something completely different, however there are some ways to improve on our current goal."),l.a.createElement("p",null,"Right now ours just tweets the daily standings of various major soccer leagues around the world, however it is missing a fey key leagues and the tweets could be made to look nicer, too. Our bot could also be modified to only tweet if the standings change, however if we wanted it to tweet for every change in real time we would need to have our script run constantly, and that could be costly. Because of the tweet character limit we could only do the top ten in each league. We could split the order up more, but still print out every team in separate tweets, and add more things like goal differential to fix this flaw and improve."),l.a.createElement("p",null,"Two people have already followed the account, and some posts already have likes, this is with no publicizing at all. We could do some marketing with more time and resources and get a big follower base. This could lead to new, related opportunities to get followers involved and keep them updated on world soccer."))}}]),t}(n.Component),$=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleProjectChange=function(e){a.setState({project:e})},a.state={project:"twfc"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e;switch(this.state.project){case"gan":e=l.a.createElement(G,null);break;case"crossword":e=l.a.createElement(F,{width:8,height:8});break;case"twfc":e=l.a.createElement(z,null);break;default:e=l.a.createElement("h1",null,"Should not be seeing this")}return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,null),l.a.createElement(M,null),l.a.createElement(q.a,{style:{padding:"10% 5% 0px 20%"}},e))}}]),t}(n.Component);var X=function(){return l.a.createElement("div",{className:"App"},l.a.createElement($,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[63,1,2]]]);
//# sourceMappingURL=main.ad6567b7.chunk.js.map