(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{46:function(e,t,a){e.exports=a(59)},51:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(8),o=a.n(r),s=(a(51),a(12)),c=a(11),i=a(16),u=a(17),m=a(18),d=a(42),h=a(6),p=a(95),E=a(94),w=a(91),b=a(100),f=a(101),g=a(97),y=a(102),v=a(93),k=a(41),j=a.n(k),O=a(96),C=a(98),T=a(39),R=a(13),P=Object(T.a)((function(e){return{root:{display:"flex"},drawer:Object(h.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(h.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(h.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)}}}));var A=function(e){var t=e.container,a=P(),l=Object(R.a)(),r=n.a.useState(!1),o=Object(d.a)(r,2),s=o[0],c=o[1],i=function(){c(!s)},u=n.a.createElement("div",null,n.a.createElement("div",{className:a.toolbar}),n.a.createElement(w.a,null),n.a.createElement(y.a,null,n.a.createElement("b",null,"Certified Associate in Project Management")),n.a.createElement(w.a,null),n.a.createElement(y.a,null,n.a.createElement("b",null,"Skills")),n.a.createElement(v.a,null,["C++","Python","SQL","JavaScript"].map((function(e,t){return n.a.createElement(y.a,{key:e},e)}))),n.a.createElement(w.a,null),n.a.createElement(y.a,null,n.a.createElement("b",null,"Libraries and Frameworks")),n.a.createElement(v.a,null,["React","Django","Express","Pandas","Git / GitHub"].map((function(e,t){return n.a.createElement(y.a,{key:e},e)}))));return n.a.createElement("div",{className:a.root},n.a.createElement(E.a,null),n.a.createElement(p.a,{position:"fixed",className:a.appBar},n.a.createElement(O.a,null,n.a.createElement(g.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:i,className:a.menuButton},n.a.createElement(j.a,null)),n.a.createElement(C.a,{variant:"h6",noWrap:!0},"Responsive drawer"))),n.a.createElement("nav",{className:a.drawer,"aria-label":"mailbox folders"},n.a.createElement(f.a,{smUp:!0,implementation:"css"},n.a.createElement(b.a,{container:t,variant:"temporary",anchor:"rtl"===l.direction?"right":"left",open:s,onClose:i,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},u)),n.a.createElement(f.a,{xsDown:!0,implementation:"css"},n.a.createElement(b.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},u))))},x=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="square";return this.props.isCurrent&&(e+=" square-current"),this.props.isInRow&&(e+=" square-in-row"),"CONTROL"===this.props.letter&&(e="square square-black"),n.a.createElement("div",{className:e,style:{width:"25px",height:"25px"}},"CONTROL"!==this.props.letter?this.props.letter:"")}}]),t}(l.Component),I=(a(58),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).makeBoard=function(e,t,a){for(var l=[],n=0;n<t;n++){l[n]=[];for(var r=0;r<e;r++)l[n][r]=a}return l},a.setBoard=function(e,t,l){var n=a.state.board;n[t][e]=l.toUpperCase(),a.setState({board:n})},a.moveUser=function(e,t){var l=a.state.userX,n=a.state.userY;1===e&&0===t?l!==a.props.width-1&&a.setState({userX:l+1}):-1===e&&0===t?0!==l&&a.setState({userX:l-1}):0===e&&1===t?0!==n&&a.setState({userY:n-1}):0===e&&-1===t&&n!==a.props.height-1&&a.setState({userY:n+1})},a.handleKeyDown=function(e){var t=e.key,l=a.state.userX,n=a.state.userY;switch(t){case"ArrowLeft":a.moveUser(-1,0);break;case"ArrowRight":a.moveUser(1,0);break;case"ArrowUp":a.moveUser(0,1);break;case"ArrowDown":a.moveUser(0,-1);break;case"Enter":a.setState({isHorizontal:!a.state.isHorizontal});break;case"Shift":break;case"Backspace":a.setBoard(l,n,""),a.state.isHorizontal?a.moveUser(-1,0):a.moveUser(0,1);break;case"Meta":break;default:a.setBoard(l,n,t),a.state.isHorizontal?a.moveUser(1,0):a.moveUser(0,-1)}},a.state={board:a.makeBoard(a.props.width,a.props.height," "),userX:0,userY:0,isHorizontal:!0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"board"},this.state.board.map((function(t,a){return n.a.createElement("div",{className:"row",key:a},t.map((function(t,l){var r=e.state.userX,o=e.state.userY,s=!1,c=r===l&&o===a;return e.state.isHorizontal?l!==r&&a===o&&(s=!0):l===r&&a!==o&&(s=!0),n.a.createElement(x,{letter:t,isCurrent:c,isInRow:s,key:l})})))})))}}]),t}(l.Component)),N=a(99),B=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(N.a,null,n.a.createElement("h1",{className:"code-line","data-line-start":"0","data-line-end":"1"},"Crest GAN"),n.a.createElement("p",{className:"has-line-data","data-line-start":"1","data-line-end":"2"},"Crest GAN is the name of my first project utilizing the TensorFlow  machine learning framework to create new images of soccer team crests based upon an existing dataset of soccer team crests. Throughout this process I learned about\u2026"),n.a.createElement("ul",null,n.a.createElement("li",{className:"has-line-data","data-line-start":"2","data-line-end":"3"},"Scraping online data using Python libraries"),n.a.createElement("li",{className:"has-line-data","data-line-start":"3","data-line-end":"4"},"Evaluating generative models based upon image outputs and loss functions"),n.a.createElement("li",{className:"has-line-data","data-line-start":"4","data-line-end":"6"},"Generative model architectures and the power of convolutional layers")),n.a.createElement("h1",{className:"code-line","data-line-start":"6","data-line-end":"7"},"Final Model"),n.a.createElement("pre",null,n.a.createElement("code",{className:"has-line-data","data-line-start":"8","data-line-end":"35"},"#Python3",n.a.createElement("br",null),"def create_discriminator_model():",n.a.createElement("br",null),"\u2003\u2003model = tf.keras.Sequential()",n.a.createElement("br",null),"\u2003\u2003input_shape = (120, 120, 3)",n.a.createElement("br",null),"\u2003\u2003dropout_prob = 0.4",n.a.createElement("br",null),n.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Conv2D(64, 5, strides=2, input_shape=input_shape, padding='same'))",n.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.LeakyReLU())",n.a.createElement("br",null),n.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Conv2D(128, 5, strides=2, padding='same'))",n.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.LeakyReLU())",n.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Dropout(dropout_prob))",n.a.createElement("br",null),n.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Conv2D(256, 5, strides=2, padding='same'))",n.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.LeakyReLU())",n.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Dropout(dropout_prob))",n.a.createElement("br",null),n.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Conv2D(512, 5, strides=2, padding='same'))",n.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.LeakyReLU())",n.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Dropout(dropout_prob))",n.a.createElement("br",null),n.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Flatten())",n.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Dense(1))",n.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Activation('sigmoid'))",n.a.createElement("br",null),n.a.createElement("br",null),"\u2003\u2003return model",n.a.createElement("br",null))),n.a.createElement("h1",{className:"code-line","data-line-start":"36","data-line-end":"37"},"Resources Used"),n.a.createElement("p",{className:"has-line-data","data-line-start":"38","data-line-end":"39"},"I used a number of open source libraries and frameworks to complete this project."))}}]),t}(l.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,n.a.createElement("strong",null,"Twitter FC")),n.a.createElement("h2",null,n.a.createElement("strong",null,"Project Description ")),n.a.createElement("p",null,"I was able to take lead on this project as the Project Manager. I was responsible for laying out the steps of the project, the plan of execution, as well as doing a good amount of the coding required. The goal of our project was to streamline sports updates for people who may not want to go through the trouble of looking up each individual game, league, or score. As sports fans, we all love knowing the scores that we care about, but sometimes it can be a hassle to look the scores all up individually. When thinking about the best way to receive this information, we decided Twitter would be the best way, as it has over 330 million users and would allow users to view the information on a platform they are already using. We also wanted to make sure that the data retrieval process was entirely separate from the tweeting process. This allows for the program to be more modular as well as scalable. This will allow us to accrue less technical debt as the project goes on if we decide to continue and make this a business. This also allowed for us to complete the project faster as we were able to work on the separate classes at the same time and then quickly make them compatible with each other. In order to achieve our goal we used the Python tweepy library to interface our class with the Twitter API as well as the Python requests library to send http requests to get the soccer information that we needed. This project was a great learning experience that taught us about http requests, the importance of exception safety, and code modularization."),n.a.createElement("h2",null,n.a.createElement("strong",null,"Responsibility Matrix")),n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Task"),n.a.createElement("td",null,"Dylan"),n.a.createElement("td",null,"George"),n.a.createElement("td",null,"Quinn")),n.a.createElement("tr",null,n.a.createElement("td",null,"Plan Project"),n.a.createElement("td",null,"R"),n.a.createElement("td",null,"R"),n.a.createElement("td",null,"R")),n.a.createElement("tr",null,n.a.createElement("td",null,"Set up Twitter account and get developer credentials"),n.a.createElement("td",null,"I"),n.a.createElement("td",null,"C"),n.a.createElement("td",null,"R")),n.a.createElement("tr",null,n.a.createElement("td",null,"Access data source for updated Soccer information"),n.a.createElement("td",null,"A"),n.a.createElement("td",null,"R"),n.a.createElement("td",null,"I")),n.a.createElement("tr",null,n.a.createElement("td",null,"Get everyone setup with Python"),n.a.createElement("td",null,"R"),n.a.createElement("td",null,"R"),n.a.createElement("td",null,"R")),n.a.createElement("tr",null,n.a.createElement("td",null,"Build Python Class for tweeting"),n.a.createElement("td",null,"R"),n.a.createElement("td",null,"I"),n.a.createElement("td",null,"C")),n.a.createElement("tr",null,n.a.createElement("td",null,"Build Python Class for getting data"),n.a.createElement("td",null,"C"),n.a.createElement("td",null,"I"),n.a.createElement("td",null,"R")),n.a.createElement("tr",null,n.a.createElement("td",null,"Connect the two classes"),n.a.createElement("td",null,"R"),n.a.createElement("td",null,"C"),n.a.createElement("td",null,"A")),n.a.createElement("tr",null,n.a.createElement("td",null,"Run tests"),n.a.createElement("td",null,"C"),n.a.createElement("td",null,"R"),n.a.createElement("td",null,"C")),n.a.createElement("tr",null,n.a.createElement("td",null,"Find server to run code daily"),n.a.createElement("td",null,"I"),n.a.createElement("td",null,"C"),n.a.createElement("td",null,"R")),n.a.createElement("tr",null,n.a.createElement("td",null,"Continue to monitor for errors"),n.a.createElement("td",null,"A"),n.a.createElement("td",null,"R"),n.a.createElement("td",null,"A"))),n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{colspan:"2"},"KEY")),n.a.createElement("tr",null,n.a.createElement("td",null,"R"),n.a.createElement("td",null,"Responsible")),n.a.createElement("tr",null,n.a.createElement("td",null,"I"),n.a.createElement("td",null,"Informed")),n.a.createElement("tr",null,n.a.createElement("td",null,"C"),n.a.createElement("td",null,"Consulted")),n.a.createElement("tr",null,n.a.createElement("td",null,"A"),n.a.createElement("td",null,"Accountable"))),n.a.createElement("h2",null,n.a.createElement("strong",null,"Attendance Log")),n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("strong",null,"Date")),n.a.createElement("td",null,"11/12"),n.a.createElement("td",null,"11/14"),n.a.createElement("td",null,"11/17"),n.a.createElement("td",null,"11/19"),n.a.createElement("td",null,"11/21"),n.a.createElement("td",null,"12/1")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("strong",null,"George")),n.a.createElement("td",null,"\u2713"),n.a.createElement("td",null,"\u2713"),n.a.createElement("td",null,"\u2713"),n.a.createElement("td",null,"\u2713"),n.a.createElement("td",null,"X"),n.a.createElement("td",null,"\u2713")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("strong",null,"Quinn")),n.a.createElement("td",null,"\u2713"),n.a.createElement("td",null,"X"),n.a.createElement("td",null,"\u2713"),n.a.createElement("td",null,"\u2713"),n.a.createElement("td",null,"\u2713"),n.a.createElement("td",null,"\u2713")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("strong",null,"Dylan")),n.a.createElement("td",null,"\u2713"),n.a.createElement("td",null,"\u2713"),n.a.createElement("td",null,"\u2713"),n.a.createElement("td",null,"\u2713"),n.a.createElement("td",null,"\u2713"),n.a.createElement("td",null,"\u2713"))),n.a.createElement("p",null,"Our team had solid attendance for all of our meetings. Between the group members there were only two total misses in six meetings. This means our group had a cumulative attendance of 89%. Our attendance record helped us to work cohesively and split up the work equally."),n.a.createElement("h2",null,n.a.createElement("strong",null,"GANTT Chart")),n.a.createElement("p",null,n.a.createElement("img",{src:"https://i.ibb.co/kgX2BkF/image6.png",alt:"GANTT Chart",border:"0"})),n.a.createElement("h2",null,n.a.createElement("strong",null,"Program Flow Diagram")),n.a.createElement("p",null,n.a.createElement("img",{src:"https://i.ibb.co/w46LCpy/image7.png",alt:"Program Flow",border:"0"})),n.a.createElement("h2",null,n.a.createElement("strong",null,"Cost / Budget Information")),n.a.createElement("p",null,"We were able to take advantage of the wide variety of open source tools so that we could complete this project entirely free of charge."),n.a.createElement("p",null,n.a.createElement("strong",null,"Total Price: $0.00")),n.a.createElement("h2",null,n.a.createElement("strong",null,"Potential Sales of the Product/Project or Market Estimation ")),n.a.createElement("p",null,"There are multiple social media automation tools currently on the market that allow for users to schedule posts on social media sites like Twitter and Instagram. One of the most popular is buffer. Buffer charges $15 per month to allow for one user to schedule 100 posts across eight different accounts. We were able to complete this project free of charge, so I think we would certainly be able to undercut this competitor and still make a profit. One potential concern is that our costs would certainly rise above $0 as we begin to scale. In order to gain awareness for our product we would want to build a website and server costs would continue to grow as we got more users. I believe that we would be able to support 20 users a month giving them the same usage as buffer for the price of only $12 per month. A relatively powerful Amazon Web Services server would cost about $75 so with 20 users per month at $12 per user per month we would be making $240 - $75 = $165 per month. We would only be able to achieve this level of profit by putting in a lot of time into the project, but it is certainly achievable."),n.a.createElement("h2",null,n.a.createElement("strong",null,"Benefits of the Project ")),n.a.createElement("p",null,"This project has many benefits. The most obvious is the benefit to soccer fans who want to see soccer standings everyday on their twitter feed, without all the hassle of looking up standings for each league. However, the benefits of this project could very easily be applied to any number of applications. The most obvious are sports related. For example, our bot could tweet out scores, standings, or player stats for any sport. In addition, the bot can easily be modified to tweet daily, weekly, or in any other desired interval of time. It can even be programmed to tweet out only when there is an update from the last tweet, to avoid repetitive information."),n.a.createElement("h2",null,n.a.createElement("strong",null,"Problems We Encountered")),n.a.createElement("p",null,"One major problem we ran into was the lack of documentation for the libraries we wanted to use. We originally went with a different Twitter interfacing library but found it too difficult to use due to the lack of documentation on the code. Another problem we ran into was with exception handling. At times if the Soccer API was down or we received data that was a little unusual, the program would stop midway through the series of tweets. This would be a big problem because then maybe half of our standings would be tweeted and the others would be left out. This was solved during our testing phase where we located the common errors and prevented them to allow for the program to continue running."),n.a.createElement("p",null,"Another problem we ran into was the twitter character limit. Twitter limits its tweets to 280 characters, and therefore we could not all the teams from a league, and their points into one tweet. We solved this problem by only tweeting the current top 10 teams. This limited the information we were able to tweet, however it kept our tweets from getting messed up and looking sloppy."),n.a.createElement("h2",null,n.a.createElement("strong",null,"Future Work or Possibilities with the Project")),n.a.createElement("p",null,"There are many possible uses for Twitter Bots. As we talked about earlier, we could make a twitter bot that does something completely different, however there are some ways to improve on our current goal."),n.a.createElement("p",null,"Right now ours just tweets the daily standings of various major soccer leagues around the world, however it is missing a fey key leagues and the tweets could be made to look nicer, too. Our bot could also be modified to only tweet if the standings change, however if we wanted it to tweet for every change in real time we would need to have our script run constantly, and that could be costly. Because of the tweet character limit we could only do the top ten in each league. We could split the order up more, but still print out every team in separate tweets, and add more things like goal differential to fix this flaw and improve."),n.a.createElement("p",null,"Two people have already followed the account, and some posts already have likes, this is with no publicizing at all. We could do some marketing with more time and resources and get a big follower base. This could lead to new, related opportunities to get followers involved and keep them updated on world soccer."))}}]),t}(l.Component),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleProjectChange=function(e){a.setState({project:e})},a.state={project:"twfc"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e;switch(this.state.project){case"gan":e=n.a.createElement(B,null);break;case"crossword":e=n.a.createElement(I,{width:8,height:8});break;case"twfc":e=n.a.createElement(S,null);break;default:e=n.a.createElement("h1",null,"Should not be seeing this")}return n.a.createElement(n.a.Fragment,null,n.a.createElement(E.a,null),n.a.createElement(A,null),n.a.createElement(N.a,{style:{padding:"50px 0px 0px 20%"}},e))}}]),t}(l.Component);var L=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.e3b299e5.chunk.js.map