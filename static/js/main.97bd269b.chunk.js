(this.webpackJsonpTheifApeClub=this.webpackJsonpTheifApeClub||[]).push([[0],{250:function(e,n){},259:function(e,n){},277:function(e,n){},279:function(e,n){},298:function(e,n){},299:function(e,n){},362:function(e,n){},364:function(e,n){},397:function(e,n){},399:function(e,n){},400:function(e,n){},405:function(e,n){},407:function(e,n){},413:function(e,n){},415:function(e,n){},428:function(e,n){},440:function(e,n){},443:function(e,n){},448:function(e,n){},456:function(e,n){},465:function(e,n){},467:function(e,n){},539:function(e,n,t){},541:function(e,n,t){"use strict";t.r(n);t(1);var i,c,a,s,r,o,l,h,d,j,b,x,O,m,u,p,f=t(88),g=t.n(f),w=(t(17),t(47),t(72),t(16)),y=t(26),v=(t(71),t(225),t(73)),T=t(226),C=t(21),N={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CONNECTION_REQUEST":return Object(C.a)(Object(C.a)({},N),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{loading:!1,account:n.payload.account,smartContract:n.payload.smartContract,web3:n.payload.web3});case"CONNECTION_FAILED":return Object(C.a)(Object(C.a)({},N),{},{loading:!1,errorMsg:n.payload});case"UPDATE_ACCOUNT":return Object(C.a)(Object(C.a)({},e),{},{account:n.payload.account});default:return e}},A={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHECK_DATA_REQUEST":return Object(C.a)(Object(C.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{loading:!1,totalSupply:n.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(C.a)(Object(C.a)({},A),{},{loading:!1,error:!0,errorMsg:n.payload});default:return e}},E=Object(v.b)({blockchain:k,data:I}),_=[T.a],F=Object(v.c)(v.a.apply(void 0,_)),M=Object(v.d)(E,F),S=t(14),U=(S.a.div(i||(i=Object(w.a)(["\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var n=e.image;return n?"url(".concat(n,")"):"none"})),S.a.div(c||(c=Object(w.a)(["\n  height: 8px;\n  width: 8px;\n"]))),S.a.div(a||(a=Object(w.a)(["\n  height: 16px;\n  width: 16px;\n"]))),S.a.div(s||(s=Object(w.a)(["\n  height: 24px;\n  width: 24px;\n"]))),S.a.div(r||(r=Object(w.a)(["\n  height: 32px;\n  width: 32px;\n"]))),S.a.div(o||(o=Object(w.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var n=e.flex;return n||0}),(function(e){var n=e.fd;return n||"column"}),(function(e){var n=e.jc;return n||"flex-start"}),(function(e){var n=e.ai;return n||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var n=e.image;return n?"url(".concat(n,")"):"none"})),S.a.p(l||(l=Object(w.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),S.a.p(h||(h=Object(w.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),S.a.p(d||(d=Object(w.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"]))),S.a.div(j||(j=Object(w.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),t(0));S.a.button(b||(b=Object(w.a)(["\n  // border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 25px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 280px;\n  font-size: 30px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),S.a.button(x||(x=Object(w.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 30px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),S.a.div(O||(O=Object(w.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),S.a.img(m||(m=Object(w.a)(["\n  width: 400px;\n  @media (min-width: 767px) {\n    width: 450px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),S.a.img(u||(u=Object(w.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  background-color: var(--accent);\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),S.a.a(p||(p=Object(w.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));t(220);var D=t(18),P=t.n(D);var W=function(){return Object(U.jsxs)("div",{className:"section-about container",children:[Object(U.jsx)(P.a,{animateIn:"animate__fadeInLeft",animateOnce:!0,children:Object(U.jsxs)("div",{className:"features",children:[Object(U.jsxs)("div",{className:" half-half vert",children:[Object(U.jsx)("h3",{children:" features"}),Object(U.jsx)("h2",{children:" Welcome to the Theif Ape club"}),Object(U.jsx)("p",{children:" The Thief Ape team values the real-world application of NFTs. We want our NFTs to stand out from the rest. Our goal is to raise awareness about NFTs and fight cybercrime as well as many cryptocurrency/nft scammers. We want our NFT holders as well as future token holders to be able to use them to their advantage."}),Object(U.jsx)("a",{href:"#",children:" Join us "})]}),Object(U.jsx)("div",{className:" half-half",children:Object(U.jsx)("img",{alt:"Theif man",src:"/config/images/theif.png"})})]})}),Object(U.jsx)(P.a,{animateIn:"animate__fadeInRight",animateOnce:!0,children:Object(U.jsxs)("div",{className:"about",children:[Object(U.jsxs)("div",{className:" half-half vert",children:[Object(U.jsx)("h3",{children:" About"}),Object(U.jsx)("h2",{children:" It's time to fight the bad"}),Object(U.jsxs)("p",{children:["T: Trust - Trust is one of the most important factors for us to make this project succesfull!",Object(U.jsx)("br",{}),Object(U.jsx)("br",{}),"A: Work - Even if we complete our roadmap we won't stop working!",Object(U.jsx)("br",{}),Object(U.jsx)("br",{}),"C: Curiosity - Our team is working and learning all day, we want to make TAC the best it can be."]})]}),Object(U.jsx)("div",{className:" half-half",children:Object(U.jsx)("img",{alt:"Theif man",src:"/config/images/theif.png"})})]})}),Object(U.jsx)("div",{className:"whitelist",children:Object(U.jsxs)("div",{className:" half-half vert",children:[Object(U.jsx)("h3",{children:" features"}),Object(U.jsx)("h2",{children:" Whitelist "}),Object(U.jsxs)("p",{children:[" What for? These are the main benefits of being whitelisted:",Object(U.jsx)("br",{}),Object(U.jsx)("br",{}),"- The Presale will be at a lower price rewarding the first members in the Project! (Smart)",Object(U.jsx)("br",{}),Object(U.jsx)("br",{}),"- You will be able to mint with no pressure because you reserved a spot. (Calm)",Object(U.jsx)("br",{}),Object(U.jsx)("br",{}),"- Lower gas-fees and bypassing the gas-wars at the public sale. (Economic)",Object(U.jsx)("br",{}),Object(U.jsx)("br",{})]}),Object(U.jsxs)("p",{children:[Object(U.jsx)("strong",{children:"The requirements: "}),"- Invite 15 people to this discord",Object(U.jsx)("br",{}),Object(U.jsx)("br",{}),"- Follow our all our social media in \u300c\ud83d\udd17\u300dlinks ",Object(U.jsx)("br",{}),Object(U.jsx)("br",{}),'- Must have "THIEF APE |" in your Discord name and one of our \u300c\ud83d\udc40\u300dsneak-peaks on your Avatar']})]})})]})};var H=function(){return Object(U.jsx)("div",{className:"nav container",children:Object(U.jsxs)("ul",{className:"nav-list",children:[Object(U.jsx)("li",{children:" THEIF APE CLUB NFT "}),Object(U.jsxs)("li",{children:[" ",Object(U.jsx)("a",{href:"",children:"Features "})]}),Object(U.jsx)("li",{children:Object(U.jsx)("a",{href:"",children:" About "})}),Object(U.jsxs)("li",{children:[" ",Object(U.jsx)("a",{href:"",children:"Roadmap "})]}),Object(U.jsxs)("li",{children:[" ",Object(U.jsx)("a",{href:"",children:"Team "})]}),Object(U.jsxs)("li",{children:[" ",Object(U.jsx)("a",{href:"",children:"Faq "})]}),Object(U.jsxs)("li",{children:["   ",Object(U.jsxs)("a",{href:"#",children:[" ",Object(U.jsx)("img",{alt:"Theif man",src:"/config/images/twitter.svg",className:"logobg"})]})]}),Object(U.jsxs)("li",{children:["    ",Object(U.jsxs)("a",{href:"#",children:["  ",Object(U.jsx)("img",{alt:"Theif man",src:"/config/images/discord.svg",className:"logobg"})]})]}),Object(U.jsxs)("li",{children:["  ",Object(U.jsxs)("a",{href:"#",children:[Object(U.jsx)("img",{alt:"Theif man",src:"/config/images/opensea.svg"})," "]})]})]})})};var R=function(){return Object(U.jsx)("div",{className:"section-team ",children:Object(U.jsxs)("div",{className:"container",children:[Object(U.jsx)("h3",{className:"half-half meeth3",children:" Meet the team"}),Object(U.jsx)("h2",{className:"half-half",children:" Introducing the Theif ape Crew"}),Object(U.jsxs)("div",{className:"team_container",children:[Object(U.jsxs)("div",{children:[Object(U.jsx)("img",{alt:"Theif man",src:"/config/images/theif.png"}),Object(U.jsx)("h3",{children:" CEO [Jonny]"})]}),Object(U.jsxs)("div",{children:[Object(U.jsx)("img",{alt:"Theif man",src:"/config/images/theif.png"}),Object(U.jsx)("h3",{children:" CEO [Satanswhore]"})]}),Object(U.jsxs)("div",{children:[Object(U.jsx)("img",{alt:"Theif man",src:"/config/images/theif.png"}),Object(U.jsx)("h3",{children:" CEO [GUZIEC]"})]}),Object(U.jsxs)("div",{children:[Object(U.jsx)("img",{alt:"Theif man",src:"/config/images/theif.png"}),Object(U.jsx)("h3",{children:" CEO [Johnny]"})]}),Object(U.jsxs)("div",{children:[Object(U.jsx)("img",{alt:"Theif man",src:"/config/images/theif.png"}),Object(U.jsx)("h3",{children:" CEO [Johnny]"})]})]})]})})},z=t(11);t(538);function L(){return Object(U.jsxs)("div",{className:"section-faq",children:[Object(U.jsxs)("div",{className:"container",children:[Object(U.jsx)("h2",{className:"subtitle blacktxt",children:" Questions need Answers"}),Object(U.jsx)("h3",{className:"header blacktxt",children:" FAQ "}),Object(U.jsxs)(z.a,{allowZeroExpanded:!0,children:[Object(U.jsxs)(z.b,{children:[Object(U.jsx)(z.d,{className:"acc-heading",children:Object(U.jsx)(z.c,{children:"How can I buy a Thief Ape Club NFT?"})}),Object(U.jsx)(z.e,{children:Object(U.jsx)("p",{children:"- You will be able to mint a Thief Ape on our website on the Mint Day or on Opensea after mint! Join our discord for more information!"})})]}),Object(U.jsxs)(z.b,{children:[Object(U.jsx)(z.d,{className:"acc-heading",children:Object(U.jsx)(z.c,{children:'What does "mint" means?'})}),Object(U.jsx)(z.e,{children:Object(U.jsx)("p",{children:"- NFT Minting is the process by which your digital art or digital content becomes a part of the Ethereum Blockchain."})})]}),Object(U.jsxs)(z.b,{children:[Object(U.jsx)(z.d,{className:"acc-heading",children:Object(U.jsx)(z.c,{children:"How much does it cost to buy one of your thief nft?"})}),Object(U.jsx)(z.e,{children:Object(U.jsx)("p",{children:"- The Price of Minting and Sale will be announced soon."})})]}),Object(U.jsxs)(z.b,{children:[Object(U.jsx)(z.d,{className:"acc-heading",children:Object(U.jsx)(z.c,{children:"Do you have a whitelist?"})}),Object(U.jsx)(z.e,{children:Object(U.jsx)("p",{children:"-Yes, we do have a whitelist that will guarantee you to have 100% of chance to get a Thief Ape Club NFT. To get on Whitelist, Join our discord for more informations!"})})]}),Object(U.jsxs)(z.b,{children:[Object(U.jsx)(z.d,{className:"acc-heading",children:Object(U.jsx)(z.c,{children:"Where can I find Thief Apes on Opensea?"})}),Object(U.jsx)(z.e,{children:Object(U.jsxs)("p",{children:["You can find our Collection on ",Object(U.jsx)("a",{href:"https://opensea.com/collections/ThiefApeClub",children:" Opensea"})," here!"]})})]}),Object(U.jsxs)(z.b,{children:[Object(U.jsx)(z.d,{className:"acc-heading",children:Object(U.jsx)(z.c,{children:"Do i own the Thief Ape after purchasing?"})}),Object(U.jsx)(z.e,{children:Object(U.jsx)("p",{children:"-Yes, full intellectual properties are given to the buyer. You can learn more about your rights as a degenerate ape holder in our terms section."})})]}),Object(U.jsxs)(z.b,{children:[Object(U.jsx)(z.d,{className:"acc-heading",children:Object(U.jsx)(z.c,{children:"When is the mint? How much will it cost?"})}),Object(U.jsx)(z.e,{children:Object(U.jsx)("p",{children:"-The mint date is will be announced soon! (follow our \u300c\ud83c\udf0e\u300dsocial-media for exact time). Mint price is TBA"})})]}),Object(U.jsxs)(z.b,{children:[Object(U.jsx)(z.d,{className:"acc-heading",children:Object(U.jsx)(z.c,{children:"Do you have a rarity system?"})}),Object(U.jsx)(z.e,{children:Object(U.jsx)("p",{children:"-Yes, you will be able to check the rarity of your NFT on Rarity.tools after mint"})})]})]})]})," "]})}var Y=function(){return Object(U.jsx)("div",{className:"section-footer",children:Object(U.jsxs)("div",{className:"container",children:[Object(U.jsx)("h2",{children:" Follow us"}),Object(U.jsxs)("div",{className:"social-icons display--flex",children:[Object(U.jsxs)("a",{href:"#",children:[" ",Object(U.jsx)("img",{alt:"Theif man",src:"/config/images/twitter.svg"})]}),Object(U.jsxs)("a",{href:"#",children:["  ",Object(U.jsx)("img",{alt:"Theif man",src:"/config/images/discord.svg"})]}),Object(U.jsxs)("a",{href:"#",children:[Object(U.jsx)("img",{alt:"Theif man",src:"/config/images/opensea.svg"})," "]})]}),Object(U.jsx)("p",{children:" \xa9 Copyright 2021 ThiefApeClub. All rights reserved. "})]})})},B=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,545)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),i(e),c(e),a(e),s(e)}))},J=(t(539),t(32));t(540);var G=function(){return Object(U.jsxs)("div",{className:"section-roadmap container",children:[Object(U.jsx)("h3",{className:"half-half subtitle",children:" Follow the journey closely"}),Object(U.jsx)("h2",{className:"half-half header",children:" Roadmap"}),Object(U.jsxs)(J.e,{children:[Object(U.jsxs)(J.b,{children:[Object(U.jsx)(J.c,{children:"Phase 1"}),Object(U.jsx)(J.c,{children:"Phase 2"}),Object(U.jsx)(J.c,{children:"Phase 3"})]}),Object(U.jsxs)(J.a,{children:[Object(U.jsx)(J.d,{children:Object(U.jsxs)("div",{class:"timeline",children:[Object(U.jsx)(P.a,{animateIn:"animate__fadeInUp",children:Object(U.jsx)("div",{class:"container-timeline left",children:Object(U.jsxs)("div",{class:"content",children:[Object(U.jsx)("h3",{children:" Thief Ape Games"}),Object(U.jsx)("p",{children:"Let\u2019s win something together! The Thief Ape Club will make quiz games every weekend besides that randomly pick NFT Numbers #1-6666 (holders of those NFT's) that will win prizes! Everyone likes to win, don't we? We win a smile on your face, and you will be awarded in Ethereum, Thief Ape Club NFT's, whitelists on other upcoming projects and some Items psss..."})]})})}),Object(U.jsx)(P.a,{animateIn:"animate__fadeInUp",children:Object(U.jsx)("div",{class:"container-timeline right",children:Object(U.jsxs)("div",{class:"content",children:[Object(U.jsx)("h3",{children:"  Great Partnerships "}),Object(U.jsx)("p",{children:" Great Partnerships! Our HODLER's will gain a huge advantage with all current Partnerships that we established, apart from the benefits of our Holders, our Partnerships will attract attention to the Thief Ape Club."})]})})}),Object(U.jsx)(P.a,{animateIn:"animate__fadeInUp",children:Object(U.jsx)("div",{class:"container-timeline left",children:Object(U.jsxs)("div",{class:"content",children:[Object(U.jsx)("h3",{children:"  Charitable Donations!"}),Object(U.jsx)("p",{children:"The CEO   will be donating $10,000 to Charity of community choice! We will help people that need this money the most! You can Suggest your charity in Tickets, everyone has a chance,  then our Community will vote what we will finally donate!"})]})})}),Object(U.jsx)(P.a,{animateIn:"animate__fadeInUp",children:Object(U.jsx)("div",{class:"container-timeline right",children:Object(U.jsxs)("div",{class:"content",children:[Object(U.jsx)("h3",{children:" Donations to Fight Cyber-Crime"}),Object(U.jsx)("p",{children:"Make our Token! The truth is, that we hate criminals! That's why the @\ud83d\udc51| CEO  will also donate $10,000 to fight the Cyber-Crime that unfortunately we all meet nowadays in the internet. We @\ud83d\udc51| CEO  don't support Cyber-Crime in anyway and any Other kind of Crime! I hope you too, dont make me wrong!"})]})})}),Object(U.jsx)(P.a,{animateIn:"animate__fadeInUp",children:Object(U.jsx)("div",{class:"container-timeline left",children:Object(U.jsxs)("div",{class:"content",children:[Object(U.jsx)("h3",{children:" 10% To Marketing"}),Object(U.jsx)("p",{children:"The Team will allocate 10% of the Mint Funds for extending the Marketing of our Project, new popular influencer's, bigger giveaways, social media campaigns, more partnerships etc. and 20% of royalty fee from OpenSea will be added to the Community Wallet. Money from it will be spent on giveaways and many, many more."})]})})})]})}),Object(U.jsx)(J.d,{children:Object(U.jsxs)("div",{class:"timeline",children:[Object(U.jsx)(P.a,{animateIn:"animate__fadeInUp",children:Object(U.jsx)("div",{class:"container-timeline left",children:Object(U.jsxs)("div",{class:"content",children:[Object(U.jsx)("h3",{children:"Sweeping the Floor Price"}),Object(U.jsx)("p",{children:"We want the Floor price to rise exponentially! In this operation, we will use our Community Fund to buy all Thief Ape's that are listed at the current floor price on the secondary marketplace. So price on mint day will be the lowest for ever in our history!"})]})})}),Object(U.jsx)(P.a,{animateIn:"animate__fadeInUp",children:Object(U.jsx)("div",{class:"container-timeline right",children:Object(U.jsxs)("div",{class:"content",children:[Object(U.jsx)("h3",{children:"  Creating a Mint Scam Alert Extension"}),Object(U.jsx)("p",{children:" We want the NFT Space to be more friendly for new people by creating a Chrome Extension that will alert you if the MINT button is a SCAM (The process where by clicking the mint button you are SENDING ETH and not MINTING, therefore you will be losing ETH and not receiving any NFT) By making this Extension our Team and our community will gain benefits! Hardly any project want to support New people in the NFT Universe like we do!"})]})})}),Object(U.jsx)(P.a,{animateIn:"animate__fadeInUp",children:Object(U.jsx)("div",{class:"container-timeline left",children:Object(U.jsxs)("div",{class:"content",children:[Object(U.jsx)("h3",{children:"  Thief Ape Merch Store"}),Object(U.jsx)("p",{children:"We will have everything from shirts, shorts, hoodies, balaclavas, accesories and more! Thief Ape Club HODLER 's will receive a huge discount on these items. So you\u2019re gonna flex with some cool items!"})]})})}),Object(U.jsx)(P.a,{animateIn:"animate__fadeInUp",children:Object(U.jsx)("div",{class:"container-timeline right",children:Object(U.jsxs)("div",{class:"content",children:[Object(U.jsx)("h3",{children:" Donations to Fight Cyber-Crime"}),Object(U.jsx)("p",{children:"Make our Token! The truth is, that we hate criminals! That's why the CEO  will also donate $10,000 to fight the Cyber-Crime that unfortunately we all meet nowadays in the internet. We CEO  don't support Cyber-Crime in anyway and any Other kind of Crime! I hope you too, dont make me wrong!"})]})})}),Object(U.jsx)(P.a,{animateIn:"animate__fadeInUp",children:Object(U.jsx)("div",{class:"container-timeline left",children:Object(U.jsxs)("div",{class:"content",children:[Object(U.jsx)("h3",{children:" Let us know about your new project!"}),Object(U.jsx)("p",{children:"Y'all know that the Thief Ape  CEO  have got a good sense for business, so as a  HODLER  of the Thief Ape Club NFT, you will have the opportunity to submit a project idea, we can offer our financial help and everything that can help you grow the project! Our (DAO) Team will decide what project to support!"})]})})}),Object(U.jsx)(P.a,{animateIn:"animate__fadeInUp",children:Object(U.jsx)("div",{class:"container-timeline right",children:Object(U.jsxs)("div",{class:"content",children:[Object(U.jsx)("h3",{children:" Make our Token!"}),Object(U.jsx)("p",{children:"Make our Token! In the Early stages of making this project, we thought, why not make a Thief Ape Token! And that was a great Idea! We think The $TAT (Thief Ape Token) will launch Q2 2022, of course our HODLER 's will get airdropped every single week! You would be able to sell it, buy Thief Ape NFT or Purchase items from our Merchandise Store!"})]})})})]})}),Object(U.jsx)(J.d,{children:Object(U.jsxs)("div",{class:"timeline",children:[Object(U.jsx)(P.a,{animateIn:"animate__fadeInUp",children:Object(U.jsx)("div",{class:"container-timeline left",children:Object(U.jsxs)("div",{class:"content",children:[Object(U.jsx)("h3",{children:"P2E Game Robbing Bank Ape!!!!!"}),Object(U.jsx)("p",{children:"Yes! A game where you Rob the Bank with your desired Thief Ape, simply connect with your metamask and your ready to earn our $TAT Token! The game will have a ranking, Top Ranked Players will be rewarded as well! More info coming soon... caintttt wait my guys!"})]})})}),Object(U.jsx)(P.a,{animateIn:"animate__fadeInUp",children:Object(U.jsx)("div",{class:"container-timeline right",children:Object(U.jsxs)("div",{class:"content",children:[Object(U.jsx)("h3",{children:"  METAVERSE"}),Object(U.jsx)("p",{children:" TBA"})]})})})]})})]})]})]})};g.a.render(Object(U.jsxs)(y.a,{store:M,children:[Object(U.jsx)(H,{}),",",Object(U.jsx)(W,{}),",",Object(U.jsx)(R,{}),",",Object(U.jsx)(G,{}),",",Object(U.jsx)(L,{}),",,",Object(U.jsx)(Y,{})]}),document.getElementById("root")),B()}},[[541,1,2]]]);
//# sourceMappingURL=main.97bd269b.chunk.js.map