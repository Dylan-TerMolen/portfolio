(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{42:function(e){e.exports=JSON.parse('{"Size":[7,7],"Creator":"Dylan TerMolen","Title":"Saturday Mini","Clues":{"Across":[{"number":"1","clue":"Sport for Conor McGregor"},{"number":"4","clue":"Eponym of a famous computing law"},{"number":"6","clue":"Alternative to Showtime"},{"number":"8","clue":"Meditating syllables"},{"number":"9","clue":"General appearing on a Chinese menu"},{"number":"10","clue":"New Netflix series about a 1-down hunter"},{"number":"12","clue":"Roman alternative to Demeter"},{"number":"13","clue":"Ewe\'s mate"}],"Down":[{"number":"1","clue":"Sully or Mike, e.g."},{"number":"2","clue":"Partner of Curly and Larry"},{"number":"3","clue":"\\"Give those guys guns!\\""},{"number":"4","clue":"Copycat"},{"number":"5","clue":"Relaxes"},{"number":"6","clue":"Sacred animal in India"},{"number":"7","clue":"Mutually exclusive logic gate"},{"number":"11","clue":"The IRS up North"}]},"Grid":["","","M","M","A","","","","M","O","O","R","E","","C","I","N","E","M","A","X","O","M","S","","T","S","O","W","I","T","C","H","E","R","","C","E","R","E","S","","","","R","A","M","",""]}')},64:function(e,t,a){e.exports=a(82)},69:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),o=a.n(r),i=(a(69),a(18)),s=a(13),c=a(20),u=a(21),m=a(24),d=a(60),h=a(8),p=a(110),E=a(86),f=a(112),w=a(113),b=a(114),g=a(115),y=a(116),v=a(117),k=a(118),C=a(123),j=a(119),P=a(122),S=a(124),R=a(57),A=a.n(R),T=a(55),N=a(12),O=a(58),D=a.n(O),I=a(59),M=a.n(I),x=a(41),z=a.n(x),L=Object(T.a)((function(e){return{root:{display:"flex"},drawer:Object(h.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(h.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(h.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)}}}));function G(e){var t="mouseenter"===e.type?"Entered":"Left ";console.log(t,e.target.id)}function W(e,t){return l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement(E.a,null,l.a.createElement("b",null,e)),t.map((function(e,t){return l.a.createElement(E.a,{id:e,key:t,onMouseEnter:G,onMouseLeave:G},e)}))),l.a.createElement(f.a,null))}var F=function(e){var t=e.container,a=L(),n=Object(N.a)(),r=l.a.useState(!1),o=Object(d.a)(r,2),i=o[0],s=o[1],c=function(){s(!i)},u=l.a.createElement("div",null,l.a.createElement("div",{className:a.toolbar}),l.a.createElement(f.a,null),W("Student at Vanderbilt University",["B.E. in Computer Engineering","Minor in Engineering Mangement","Certified Associate in Project Management"]),W("Programming Languages I'm Familiar With",["Python","C++","SQL","JavaScript"]),W("Libraries, Frameworks, and Tools I'm Familiar With",["React","Django","Express","Pandas","Git and GitHub","SQL Server"]),W("Interests",["Crosswording","Jeopardy","Soccer","Chess"]));return l.a.createElement("div",{className:a.root},l.a.createElement(w.a,null),l.a.createElement(b.a,{position:"fixed",className:a.appBar},l.a.createElement(g.a,null,l.a.createElement(y.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:c,className:a.menuButton},l.a.createElement(A.a,null)),l.a.createElement(v.a,{color:"inherit",style:{flex:1}},"Dylan TerMolen's Portfolio | In Development"),l.a.createElement("span",null,l.a.createElement(z.a,{variant:"popover",popupId:"demo-popup-menu"},(function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(k.a,Object.assign({variant:"contained",color:"primary"},Object(x.bindTrigger)(t)),"See My Projects"),l.a.createElement(C.a,Object(x.bindMenu)(t),l.a.createElement(j.a,{id:"gan",style:"gan"===e.article?{backgroundColor:"#3f51b5",color:"white"}:{},onClick:function(a){return e.handleProjectDropdownChange(a,t)}},"Crest GAN"),l.a.createElement(j.a,{id:"twfc",style:"twfc"===e.article?{backgroundColor:"#3f51b5",color:"white"}:{},onClick:function(a){return e.handleProjectDropdownChange(a,t)}}," Twitter FC"),l.a.createElement(j.a,{id:"crossword",style:"crossword"===e.article?{backgroundColor:"#3f51b5",color:"white"}:{},onClick:function(a){return e.handleProjectDropdownChange(a,t)}},"Crossword Interface")))})),l.a.createElement(y.a,{href:"https://www.linkedin.com/in/dylan-termolen-748048170/",color:"inherit","aria-label":"Save"},l.a.createElement(D.a,null)),l.a.createElement(y.a,{href:"https://github.com/Dylan-TerMolen",color:"inherit","aria-label":"More Options"},l.a.createElement(M.a,null))))),l.a.createElement("nav",{className:a.drawer,"aria-label":"mailbox folders"},l.a.createElement(P.a,{smUp:!0,implementation:"css"},l.a.createElement(S.a,{container:t,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:i,onClose:c,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},u)),l.a.createElement(P.a,{xsDown:!0,implementation:"css"},l.a.createElement(S.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},u))))},U=a(42),B=(a(81),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).initializeClueNumbers=function(e){console.log("Called");for(var t=1,a=[],n=0;n<e.length;n++)null==e[n]?a.push(null):null==e[n-7]||n%7===0||null==e[n-1]?a.push(t++):a.push(null);return a},a.initializeUserGridFromSolution=function(e){return e.map((function(e){return""!==e?"":null}))},a.initilaizeUserPosition=function(e){return e.findIndex((function(e){return""!==e}))},a.updateGrid=function(e,t){var n=a.state.grid;n[t]=e.toUpperCase(),a.setState({grid:n})},a.handleKeyDown=function(e){var t=e.key;switch(t){case"ArrowLeft":a.moveLeft();break;case"ArrowRight":a.moveRight();break;case"ArrowUp":a.moveUp();break;case"ArrowDown":a.moveDown();break;case"Enter":a.setState({isAcross:!a.state.isAcross});break;case"Shift":break;case"Backspace":a.updateGrid("",a.state.userPosition),a.state.isAcross?a.moveLeft():a.moveUp();break;case"Meta":break;default:a.updateGrid(t,a.state.userPosition),a.state.isAcross?a.moveRight():a.moveDown()}},a.moveLeft=function(){if(a.state.userPosition%7!==0){var e=a.state.userPosition-1;null!=a.state.grid[e]&&a.setState({userPosition:e})}},a.moveRight=function(){if(a.state.userPosition%7!==6){var e=a.state.userPosition+1;null!=a.state.grid[e]&&a.setState({userPosition:e})}},a.moveUp=function(){var e=a.state.userPosition-a.gridSize;null!=a.state.grid[e]&&a.setState({userPosition:e})},a.moveDown=function(){var e=a.state.userPosition+a.gridSize;null!=a.state.grid[e]&&a.setState({userPosition:e})},a.handleCheckWord=function(e){console.log("Check Word!"),a.myRef.current.focus()},a.handleCheckPuzzle=function(e){console.log("Check Puzzle!"),a.myRef.current.focus()},a.handleClear=function(e){a.setState({grid:a.initializeUserGridFromSolution(a.solution)}),a.myRef.current.focus()},a.areVerticallyAligned=function(e,t){if(t>e){var n=[t,e];e=n[0],t=n[1]}for(;e>0;)if((e-=a.gridSize)===t)return!0},a.renderSquare=function(e,t){var n=a.state.userPosition,r=l.a.createElement("div",null,l.a.createElement("sup",{className:"grid-clue-number"},a.clueNumbers[t]),e);if(null===e)return l.a.createElement("div",{key:t,className:"square square-black"});if(t===a.state.userPosition)return l.a.createElement("div",{key:t,className:"square square-user"},r);var o="square ";if(a.state.isAcross){var i=n%a.gridSize,s=a.gridSize-i;t>=n-i&&t<n+s&&(o+="square-in-row ")}else o+=a.areVerticallyAligned(t,n)?" square-in-row":"";return l.a.createElement("div",{key:t,className:o},r)},a.renderGrid=function(e){return e.map((function(e,t){return a.renderSquare(e,t)}))},a.renderCluesList=function(e){return e.map((function(e,t){return l.a.createElement(E.a,{key:t,className:e.number==a.state.currentClue?"clue-highlighted":""}," ",l.a.createElement("div",{className:"clue-number"},e.number),"\xa0",l.a.createElement("div",null,e.clue))}))},a.myRef=l.a.createRef(),a.solution=U.Grid,a.clues=U.Clues,a.gridSize=U.Size[0],a.state={grid:a.initializeUserGridFromSolution(a.solution),userPosition:a.initilaizeUserPosition(a.solution),userIsAcross:!0,currentClue:1,isAcross:!0},a.clueNumbers=a.initializeClueNumbers(a.state.grid),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown),this.myRef.current.focus()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return l.a.createElement("div",{className:"crossword",tabIndex:"-1",ref:this.myRef},l.a.createElement("div",{className:"actions-menu"},l.a.createElement(k.a,{variant:"contained",onClick:this.handleCheckWord},"Check Word"),l.a.createElement(k.a,{variant:"contained",onClick:this.handleCheckPuzzle},"Check Puzzle"),l.a.createElement(k.a,{variant:"contained",onClick:this.handleClear},"Clear")),l.a.createElement("br",null),l.a.createElement("div",{className:"board-and-clues"},l.a.createElement("div",{className:"board"},this.renderGrid(this.state.grid)),l.a.createElement("div",{className:"clues"},l.a.createElement(p.a,null,l.a.createElement(E.a,null,l.a.createElement("b",null,"Across")),l.a.createElement("hr",null),this.renderCluesList(this.clues.Across))),l.a.createElement("div",{className:"clues"},l.a.createElement(p.a,null,l.a.createElement(E.a,null,l.a.createElement("b",null,"Down")),l.a.createElement("hr",null),this.renderCluesList(this.clues.Down)))))}}]),t}(n.Component)),q=a(120),$=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(q.a,null,l.a.createElement("h1",{className:"code-line","data-line-start":"0","data-line-end":"1"},"Crest GAN"),l.a.createElement("p",{className:"has-line-data","data-line-start":"1","data-line-end":"2"},"Crest GAN is the name of my first project utilizing the TensorFlow  machine learning framework to create new images of soccer team crests based upon an existing dataset of soccer team crests. Throughout this process I learned about\u2026"),l.a.createElement("ul",null,l.a.createElement("li",{className:"has-line-data","data-line-start":"2","data-line-end":"3"},"Scraping online data using Python libraries"),l.a.createElement("li",{className:"has-line-data","data-line-start":"3","data-line-end":"4"},"Evaluating generative models based upon image outputs and loss functions"),l.a.createElement("li",{className:"has-line-data","data-line-start":"4","data-line-end":"6"},"Generative model architectures and the power of convolutional layers")),l.a.createElement("h1",{className:"code-line","data-line-start":"6","data-line-end":"7"},"Final Model"),l.a.createElement("pre",null,l.a.createElement("code",{className:"has-line-data","data-line-start":"8","data-line-end":"35"},"#Python3",l.a.createElement("br",null),"def create_discriminator_model():",l.a.createElement("br",null),"\u2003\u2003model = tf.keras.Sequential()",l.a.createElement("br",null),"\u2003\u2003input_shape = (120, 120, 3)",l.a.createElement("br",null),"\u2003\u2003dropout_prob = 0.4",l.a.createElement("br",null),l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Conv2D(64, 5, strides=2, input_shape=input_shape, padding='same'))",l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.LeakyReLU())",l.a.createElement("br",null),l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Conv2D(128, 5, strides=2, padding='same'))",l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.LeakyReLU())",l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Dropout(dropout_prob))",l.a.createElement("br",null),l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Conv2D(256, 5, strides=2, padding='same'))",l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.LeakyReLU())",l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Dropout(dropout_prob))",l.a.createElement("br",null),l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Conv2D(512, 5, strides=2, padding='same'))",l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.LeakyReLU())",l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Dropout(dropout_prob))",l.a.createElement("br",null),l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Flatten())",l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Dense(1))",l.a.createElement("br",null),"\u2003\u2003model.add(tf.keras.layers.Activation('sigmoid'))",l.a.createElement("br",null),l.a.createElement("br",null),"\u2003\u2003return model",l.a.createElement("br",null))),l.a.createElement("h1",{className:"code-line","data-line-start":"36","data-line-end":"37"},"Resources Used"),l.a.createElement("p",{className:"has-line-data","data-line-start":"38","data-line-end":"39"},"I used a number of open source libraries and frameworks to complete this project."))}}]),t}(n.Component),_=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{color:"primary"},l.a.createElement("strong",null,"Twitter FC")),l.a.createElement("h2",null,l.a.createElement("strong",null,"Project Description ")),l.a.createElement("p",null,"I was able to take lead on this project as the Project Manager. I was responsible for laying out the steps of the project, the plan of execution, as well as doing a good amount of the coding required. The goal of our project was to streamline sports updates for people who may not want to go through the trouble of looking up each individual game, league, or score. As sports fans, we all love knowing the scores that we care about, but sometimes it can be a hassle to look the scores all up individually. When thinking about the best way to receive this information, we decided Twitter would be the best way, as it has over 330 million users and would allow users to view the information on a platform they are already using. We also wanted to make sure that the data retrieval process was entirely separate from the tweeting process. This allows for the program to be more modular as well as scalable. This will allow us to accrue less technical debt as the project goes on if we decide to continue and make this a business. This also allowed for us to complete the project faster as we were able to work on the separate classes at the same time and then quickly make them compatible with each other. In order to achieve our goal we used the Python tweepy library to interface our class with the Twitter API as well as the Python requests library to send http requests to get the soccer information that we needed. This project was a great learning experience that taught us about http requests, the importance of exception safety, and code modularization."),l.a.createElement("h2",null,l.a.createElement("strong",null,"Responsibility Matrix")),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Task"),l.a.createElement("td",null,"Dylan"),l.a.createElement("td",null,"George"),l.a.createElement("td",null,"Quinn")),l.a.createElement("tr",null,l.a.createElement("td",null,"Plan Project"),l.a.createElement("td",null,"R"),l.a.createElement("td",null,"R"),l.a.createElement("td",null,"R")),l.a.createElement("tr",null,l.a.createElement("td",null,"Set up Twitter account and get developer credentials"),l.a.createElement("td",null,"I"),l.a.createElement("td",null,"C"),l.a.createElement("td",null,"R")),l.a.createElement("tr",null,l.a.createElement("td",null,"Access data source for updated Soccer information"),l.a.createElement("td",null,"A"),l.a.createElement("td",null,"R"),l.a.createElement("td",null,"I")),l.a.createElement("tr",null,l.a.createElement("td",null,"Get everyone setup with Python"),l.a.createElement("td",null,"R"),l.a.createElement("td",null,"R"),l.a.createElement("td",null,"R")),l.a.createElement("tr",null,l.a.createElement("td",null,"Build Python Class for tweeting"),l.a.createElement("td",null,"R"),l.a.createElement("td",null,"I"),l.a.createElement("td",null,"C")),l.a.createElement("tr",null,l.a.createElement("td",null,"Build Python Class for getting data"),l.a.createElement("td",null,"C"),l.a.createElement("td",null,"I"),l.a.createElement("td",null,"R")),l.a.createElement("tr",null,l.a.createElement("td",null,"Connect the two classes"),l.a.createElement("td",null,"R"),l.a.createElement("td",null,"C"),l.a.createElement("td",null,"A")),l.a.createElement("tr",null,l.a.createElement("td",null,"Run tests"),l.a.createElement("td",null,"C"),l.a.createElement("td",null,"R"),l.a.createElement("td",null,"C")),l.a.createElement("tr",null,l.a.createElement("td",null,"Find server to run code daily"),l.a.createElement("td",null,"I"),l.a.createElement("td",null,"C"),l.a.createElement("td",null,"R")),l.a.createElement("tr",null,l.a.createElement("td",null,"Continue to monitor for errors"),l.a.createElement("td",null,"A"),l.a.createElement("td",null,"R"),l.a.createElement("td",null,"A")))),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{colspan:"2"},"KEY")),l.a.createElement("tr",null,l.a.createElement("td",null,"R"),l.a.createElement("td",null,"Responsible")),l.a.createElement("tr",null,l.a.createElement("td",null,"I"),l.a.createElement("td",null,"Informed")),l.a.createElement("tr",null,l.a.createElement("td",null,"C"),l.a.createElement("td",null,"Consulted")),l.a.createElement("tr",null,l.a.createElement("td",null,"A"),l.a.createElement("td",null,"Accountable")))),l.a.createElement("h2",null,l.a.createElement("strong",null,"Attendance Log")),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Date")),l.a.createElement("td",null,"11/12"),l.a.createElement("td",null,"11/14"),l.a.createElement("td",null,"11/17"),l.a.createElement("td",null,"11/19"),l.a.createElement("td",null,"11/21"),l.a.createElement("td",null,"12/1")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"George")),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"X"),l.a.createElement("td",null,"\u2713")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Quinn")),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"X"),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"\u2713")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Dylan")),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"\u2713"),l.a.createElement("td",null,"\u2713")))),l.a.createElement("p",null,"Our team had solid attendance for all of our meetings. Between the group members there were only two total misses in six meetings. This means our group had a cumulative attendance of 89%. Our attendance record helped us to work cohesively and split up the work equally."),l.a.createElement("h2",null,l.a.createElement("strong",null,"GANTT Chart")),l.a.createElement("p",null,l.a.createElement("img",{src:"https://i.ibb.co/kgX2BkF/image6.png",alt:"GANTT Chart",border:"0"})),l.a.createElement("h2",null,l.a.createElement("strong",null,"Program Flow Diagram")),l.a.createElement("p",null,l.a.createElement("img",{src:"https://i.ibb.co/w46LCpy/image7.png",alt:"Program Flow",border:"0"})),l.a.createElement("h2",null,l.a.createElement("strong",null,"Cost / Budget Information")),l.a.createElement("p",null,"We were able to take advantage of the wide variety of open source tools so that we could complete this project entirely free of charge."),l.a.createElement("p",null,l.a.createElement("strong",null,"Total Price: $0.00")),l.a.createElement("h2",null,l.a.createElement("strong",null,"Potential Sales of the Product/Project or Market Estimation ")),l.a.createElement("p",null,"There are multiple social media automation tools currently on the market that allow for users to schedule posts on social media sites like Twitter and Instagram. One of the most popular is buffer. Buffer charges $15 per month to allow for one user to schedule 100 posts across eight different accounts. We were able to complete this project free of charge, so I think we would certainly be able to undercut this competitor and still make a profit. One potential concern is that our costs would certainly rise above $0 as we begin to scale. In order to gain awareness for our product we would want to build a website and server costs would continue to grow as we got more users. I believe that we would be able to support 20 users a month giving them the same usage as buffer for the price of only $12 per month. A relatively powerful Amazon Web Services server would cost about $75 so with 20 users per month at $12 per user per month we would be making $240 - $75 = $165 per month. We would only be able to achieve this level of profit by putting in a lot of time into the project, but it is certainly achievable."),l.a.createElement("h2",null,l.a.createElement("strong",null,"Benefits of the Project ")),l.a.createElement("p",null,"This project has many benefits. The most obvious is the benefit to soccer fans who want to see soccer standings everyday on their twitter feed, without all the hassle of looking up standings for each league. However, the benefits of this project could very easily be applied to any number of applications. The most obvious are sports related. For example, our bot could tweet out scores, standings, or player stats for any sport. In addition, the bot can easily be modified to tweet daily, weekly, or in any other desired interval of time. It can even be programmed to tweet out only when there is an update from the last tweet, to avoid repetitive information."),l.a.createElement("h2",null,l.a.createElement("strong",null,"Problems We Encountered")),l.a.createElement("p",null,"One major problem we ran into was the lack of documentation for the libraries we wanted to use. We originally went with a different Twitter interfacing library but found it too difficult to use due to the lack of documentation on the code. Another problem we ran into was with exception handling. At times if the Soccer API was down or we received data that was a little unusual, the program would stop midway through the series of tweets. This would be a big problem because then maybe half of our standings would be tweeted and the others would be left out. This was solved during our testing phase where we located the common errors and prevented them to allow for the program to continue running."),l.a.createElement("p",null,"Another problem we ran into was the twitter character limit. Twitter limits its tweets to 280 characters, and therefore we could not all the teams from a league, and their points into one tweet. We solved this problem by only tweeting the current top 10 teams. This limited the information we were able to tweet, however it kept our tweets from getting messed up and looking sloppy."),l.a.createElement("h2",null,l.a.createElement("strong",null,"Future Work or Possibilities with the Project")),l.a.createElement("p",null,"There are many possible uses for Twitter Bots. As we talked about earlier, we could make a twitter bot that does something completely different, however there are some ways to improve on our current goal."),l.a.createElement("p",null,"Right now ours just tweets the daily standings of various major soccer leagues around the world, however it is missing a fey key leagues and the tweets could be made to look nicer, too. Our bot could also be modified to only tweet if the standings change, however if we wanted it to tweet for every change in real time we would need to have our script run constantly, and that could be costly. Because of the tweet character limit we could only do the top ten in each league. We could split the order up more, but still print out every team in separate tweets, and add more things like goal differential to fix this flaw and improve."),l.a.createElement("p",null,"Two people have already followed the account, and some posts already have likes, this is with no publicizing at all. We could do some marketing with more time and resources and get a big follower base. This could lead to new, related opportunities to get followers involved and keep them updated on world soccer."))}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleProjectDropdownChange=function(e,t){t.close(),a.setState({project:e.target.id})},a.state={project:"crossword"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e;switch(this.state.project){case"gan":e=l.a.createElement("div",null,l.a.createElement("h1",null," Full Report Coming Soon! ")," ",l.a.createElement($,null));break;case"crossword":e=l.a.createElement("div",null,l.a.createElement("h1",null," Interactivity & Reponsiveness improving very soon ")," ",l.a.createElement(B,null));break;case"twfc":e=l.a.createElement(_,null);break;default:e=l.a.createElement("h1",null,"Should not be seeing this")}return l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,null),l.a.createElement(F,{article:this.state.project,handleProjectDropdownChange:this.handleProjectDropdownChange}),l.a.createElement(q.a,{style:{padding:"7% 5% 0px 20%"}},e))}}]),t}(n.Component);var K=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[64,1,2]]]);
//# sourceMappingURL=main.8705cb87.chunk.js.map