(this.webpackJsonpmillionaire_quiz=this.webpackJsonpmillionaire_quiz||[]).push([[0],[,,,,,function(e,t,n){e.exports={main:"Main_main__XISJd",top:"Main_top__zWCab",bottom:"Main_bottom__2tXz3",timer:"Main_timer__2b_4t",result:"Main_result__1oc_6",winner:"Main_winner__1Ck_5",btnNewGame:"Main_btnNewGame__1CDTl",loose:"Main_loose__ZtxVC"}},function(e,t,n){e.exports={answer:"Answer_answer__3p7o9",active:"Answer_active__2p0Yo",correct:"Answer_correct__3NbBK",wrong:"Answer_wrong__1iMRQ"}},,function(e,t,n){e.exports={moneyListItem:"MoneyItem_moneyListItem__3134B",moneyListItem__number:"MoneyItem_moneyListItem__number__2uGB-",moneyListItem__amount:"MoneyItem_moneyListItem__amount__3_rtU",active:"MoneyItem_active__2fv9o",save:"MoneyItem_save__eGNdE"}},,function(e,t,n){e.exports={task:"BlockTask_task__12FiH",question:"BlockTask_question__2mwRD",answers:"BlockTask_answers__2wETs"}},,,function(e,t,n){e.exports={pyramid:"Pyramid_pyramid__3-aCZ",moneyList:"Pyramid_moneyList__2RtXT"}},,function(e,t,n){e.exports={start:"StartGame_start__3nmD2",inputError:"StartGame_inputError__1h5Ey"}},,function(e,t,n){e.exports={app:"App_app__10CKc"}},,,,,function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(9),o=n.n(a),s=(n(22),n(3)),i=n(17),u=n.n(i),m=n(13),l=n.n(m),j=n(8),d=n.n(j),b=n(1),x=r.a.memo((function(e){var t=e.id,n=e.amount,c=e.activeQuestion,r=e.saveMoney,a=c===t?"".concat(d.a.moneyListItem," ").concat(d.a.active):d.a.moneyListItem,o=r?d.a.save:"";return Object(b.jsxs)("li",{className:"".concat(a," ").concat(o),children:[Object(b.jsx)("span",{className:d.a.moneyListItem__number,children:t}),Object(b.jsx)("span",{className:d.a.moneyListItem__amount,children:n})]})})),_=n(2),v=r.a.memo((function(){var e=Object(_.c)((function(e){return e.quiz.pyramid})),t=Object(_.c)((function(e){return e.quiz.activeQuestion}));return Object(b.jsx)("div",{className:l.a.pyramid,children:Object(b.jsx)("ul",{className:l.a.moneyList,children:e.map((function(e){return Object(b.jsx)(x,{id:e.id,saveMoney:e.saveMoney,amount:e.amount,activeQuestion:t},e.id)})).reverse()})})})),O=n(5),p=n.n(O),y=n(10),f=n.n(y),h=n(6),w=n.n(h),M=n(4),N={userName:null,pyramid:[{id:1,amount:"$ 100",saveMoney:!1},{id:2,amount:"$ 200",saveMoney:!1},{id:3,amount:"$ 300",saveMoney:!1},{id:4,amount:"$ 500",saveMoney:!1},{id:5,amount:"$ 1000",saveMoney:!0},{id:6,amount:"$ 2000",saveMoney:!1},{id:7,amount:"$ 4000",saveMoney:!1},{id:8,amount:"$ 8000",saveMoney:!1},{id:9,amount:"$ 16000",saveMoney:!1},{id:10,amount:"$ 32000",saveMoney:!0},{id:11,amount:"$ 64000",saveMoney:!1},{id:12,amount:"$ 125000",saveMoney:!1},{id:13,amount:"$ 250000",saveMoney:!1},{id:14,amount:"$ 500000",saveMoney:!1},{id:15,amount:"$ 1000000",saveMoney:!1}],activeQuestion:1,questions:[{id:1,question:"\u041e\u0442\u043a\u0443\u0434\u0430 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438 \u043e\u0444\u0438\u0441\u043e\u0432 \u043d\u0430\u043b\u0438\u0432\u0430\u044e\u0442 \u0432 \u0447\u0430\u0448\u043a\u0438 \u0432\u043e\u0434\u0443?",answers:[{text:"\u0438\u0437 \u043f\u0440\u0438\u043d\u0442\u0435\u0440\u0430",correct:!1},{text:"\u0438\u0437 \u0441\u043a\u0430\u043d\u0435\u0440\u0430",correct:!1},{text:"\u0438\u0437 \u0441\u0442\u0435\u043f\u043b\u0435\u0440\u0430",correct:!1},{text:"\u0438\u0437 \u043a\u0443\u043b\u0435\u0440\u0430",correct:!0}]},{id:2,question:"\u0427\u0442\u043e \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u043b \u0414\u0436\u0435\u043a \u0432 \u0441\u0442\u0438\u0445\u043e\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u0438, \u043f\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u043c \u0441 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u041c\u0430\u0440\u0448\u0430\u043a\u043e\u043c?",answers:[{text:"\u043c\u0430\u0440\u0448\u0440\u0443\u0442",correct:!1},{text:"\u0433\u0440\u0430\u0444\u0438\u043a",correct:!1},{text:"\u0434\u043e\u043c",correct:!0},{text:"\u043a\u043e\u043c\u043c\u0443\u043d\u0438\u0437\u043c",correct:!1}]},{id:3,question:"\u0427\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u0443\u0442\u044c \u043d\u0430 \u0448\u0430\u0445\u043c\u0430\u0442\u043d\u043e\u0439 \u0434\u043e\u0441\u043a\u0435?",answers:[{text:"\u0432\u0435\u0447\u043d\u044b\u0439 \u0448\u0430\u0445",correct:!0},{text:"\u0432\u0435\u0447\u043d\u044b\u0439 \u043c\u0430\u0442",correct:!1},{text:"\u0432\u0435\u0447\u043d\u044b\u0439 \u0437\u043e\u0432",correct:!1},{text:"\u0432\u0435\u0447\u043d\u044b\u0439 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043b\u044c",correct:!1}]},{id:4,question:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u043a\u0430\u0440\u0448\u0435\u0440\u0438\u043d\u0433?",answers:[{text:"\u0441\u0435\u043a\u043e\u043d\u0434-\u0445\u0435\u043d\u0434",correct:!1},{text:"\u043d\u0430\u043f\u043e\u043b\u044c\u043d\u044b\u0439 \u0441\u0432\u0435\u0442\u0438\u043b\u044c\u043d\u0438\u043a",correct:!1},{text:"\u0431\u0440\u0430\u0447\u043d\u044b\u0439 \u0442\u0430\u043d\u0435\u0446 \u0432\u043e\u0440\u043e\u043d\u044b",correct:!1},{text:"\u0430\u0440\u0435\u043d\u0434\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f",correct:!0}]},{id:5,question:"\u041a\u0430\u043a\u0438\u0435 \u043c\u0443\u0436\u0447\u0438\u043d\u044b, \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u044d\u0442\u0438\u043a\u0435\u0442\u0443, \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u043d\u044b \u0438\u0434\u0442\u0438 \u0441\u043b\u0435\u0432\u0430 \u043e\u0442 \u0434\u0430\u043c\u044b?",answers:[{text:"\u0432\u044b\u0441\u043e\u043a\u0438\u0435",correct:!1},{text:"\u043f\u043e\u0436\u0438\u043b\u044b\u0435",correct:!1},{text:"\u0438\u043d\u043e\u0433\u043e\u0440\u043e\u0434\u043d\u0438\u0435",correct:!1},{text:"\u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0438\u0435",correct:!0}]},{id:6,question:"\u041a\u0430\u043a\u0443\u044e \u043f\u0435\u0441\u043d\u044e \u0440\u0430\u0441\u043f\u0435\u0432\u0430\u0435\u0442 \u043f\u0440\u0438 \u043d\u0430\u0440\u043e\u0434\u0435 \u0431\u0435\u043b\u043e\u0447\u043a\u0430 \u0432 \xab\u0421\u043a\u0430\u0437\u043a\u0435 \u043e \u0446\u0430\u0440\u0435 \u0421\u0430\u043b\u0442\u0430\u043d\u0435\xbb?",answers:[{text:"\xab\u0412\u043e \u043f\u043e\u043b\u0435 \u0431\u0435\u0440\u0435\u0437\u0430 \u0441\u0442\u043e\u044f\u043b\u0430\xbb",correct:!1},{text:"\xab\u0412\u043e \u043a\u0443\u0437\u043d\u0438\u0446\u0435\xbb",correct:!1},{text:"\xab\u0412\u043e \u0441\u0430\u0434\u0443 \u043b\u0438, \u0432 \u043e\u0433\u043e\u0440\u043e\u0434\u0435\xbb",correct:!0},{text:"\xab\u0412\u043e\u0442 \u043a\u0442\u043e-\u0442\u043e \u0441 \u0433\u043e\u0440\u043e\u0447\u043a\u0438 \u0441\u043f\u0443\u0441\u0442\u0438\u043b\u0441\u044f\xbb",correct:!1}]},{id:7,question:"\u041a\u0442\u043e \xab\u043f\u043e\u043c\u043e\u0433\u0430\u043b\xbb \u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u0438 \u0432 \u0441\u0443\u0434\u043e\u0432\u043e\u043c \u0436\u0443\u0440\u043d\u0430\u043b\u0435 \u043f\u043b\u043e\u0442\u0430 \xab\u041a\u043e\u043d-\u0422\u0438\u043a\u0438\xbb \u0422\u0443\u0440\u0430 \u0425\u0435\u0439\u0435\u0440\u0434\u0430\u043b\u0430?",answers:[{text:"\u0447\u0430\u0439\u043a\u0438",correct:!1},{text:"\u043a\u0430\u0440\u0430\u043a\u0430\u0442\u0438\u0446\u044b",correct:!0},{text:"\u0434\u0435\u043b\u044c\u0444\u0438\u043d\u044b",correct:!1},{text:"\u043a\u0440\u044b\u0441\u044b",correct:!1}]},{id:8,question:"\u041a\u0430\u043a\u043e\u0439 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043b\u0438\u0448\u0435\u043d \u043a\u0440\u0443\u043f\u044c\u0435 \u043a\u0430\u0437\u0438\u043d\u043e?",answers:[{text:"\u043f\u0440\u0438\u0433\u043b\u0430\u0434\u0438\u0442\u044c \u0440\u0443\u043a\u043e\u0439 \u0432\u043e\u043b\u043e\u0441\u044b",correct:!1},{text:"\u0441\u043d\u044f\u0442\u044c \u043f\u044b\u043b\u0438\u043d\u043a\u0443 \u0441 \u0436\u0438\u043b\u0435\u0442\u0430",correct:!1},{text:"\u043f\u043e\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0433\u0430\u043b\u0441\u0442\u0443\u043a",correct:!1},{text:"\u0434\u043e\u0441\u0442\u0430\u0442\u044c \u043f\u043b\u0430\u0442\u043e\u043a \u0438\u0437 \u043a\u0430\u0440\u043c\u0430\u043d\u0430",correct:!0}]},{id:9,question:"\u0412 \u043a\u0430\u043a\u043e\u043c \u043a\u0438\u043d\u043e\u0444\u0438\u043b\u044c\u043c\u0435 \u043d\u0435\u0442 \u0441\u0446\u0435\u043d\u044b \u043d\u0430 \u044d\u043a\u0437\u0430\u043c\u0435\u043d\u0435?",answers:[{text:"\xab\u0414\u043e\u0436\u0438\u0432\u0435\u043c \u0434\u043e \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a\u0430\xbb",correct:!0},{text:"\xab\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \xab\u042b\xbb\u2026\xbb",correct:!1},{text:"\xab\u0421\u0442\u0430\u0440\u0438\u043a \u0425\u043e\u0442\u0442\u0430\u0431\u044b\u0447\xbb",correct:!1},{text:"\xab\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u0430\xbb",correct:!1}]},{id:10,question:"\u0427\u0442\u043e \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0432\u0441\u0435\u0445 \u0434\u0432\u043e\u0440\u0446\u043e\u0432 \u0417\u0430\u043f\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430 \u043a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0445 \u0438\u043c\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u0432?",answers:[{text:"\u0434\u0432\u0435\u0440\u0438",correct:!1},{text:"\u043b\u0435\u0441\u0442\u043d\u0438\u0446\u044b",correct:!1},{text:"\u043e\u043a\u043d\u0430",correct:!1},{text:"\xab\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u0430\xbb",correct:!0}]},{id:11,question:"\u041a\u0430\u043a\u0430\u044f \u043a\u043d\u0438\u0433\u0430 \u0432 \u0442\u0430\u043a \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u043e\u0439 \xab\u043c\u0430\u043a\u0443\u043b\u0430\u0442\u0443\u0440\u043d\u043e\u0439 \u0441\u0435\u0440\u0438\u0438\xbb \u0421\u0421\u0421\u0420 \u0432\u044b\u0448\u043b\u0430 \u043f\u0435\u0440\u0432\u043e\u0439?",answers:[{text:"\xab\u0421\u043e\u0431\u043e\u0440 \u041f\u0430\u0440\u0438\u0436\u0441\u043a\u043e\u0439 \u0411\u043e\u0433\u043e\u043c\u0430\u0442\u0435\u0440\u0438\xbb",correct:!1},{text:"\xab\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0430 \u041c\u0430\u0440\u0433\u043e\xbb",correct:!0},{text:"\xab\u041b\u0443\u043d\u043d\u044b\u0439 \u043a\u0430\u043c\u0435\u043d\u044c\xbb",correct:!1},{text:"\xab\u0421\u043e\u0431\u0430\u043a\u0430 \u0411\u0430\u0441\u043a\u0435\u0440\u0432\u0438\u043b\u0435\u0439\xbb",correct:!1}]},{id:12,question:"\u041a\u043e\u043c\u0443 \u0410\u043d\u043d\u0430 \u0410\u0445\u043c\u0430\u0442\u043e\u0432\u0430 \u043f\u043e\u0441\u0432\u044f\u0442\u0438\u043b\u0430 \u0441\u0442\u0438\u0445\u043e\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u0435 \xab\u042f \u043f\u0440\u0438\u0448\u043b\u0430 \u043a \u043f\u043e\u044d\u0442\u0443 \u0432 \u0433\u043e\u0441\u0442\u0438\xbb?",answers:[{text:"\u041d\u0438\u043a\u043e\u043b\u0430\u044e \u0413\u0443\u043c\u0438\u043b\u0435\u0432\u0443",correct:!1},{text:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0443 \u0411\u043b\u043e\u043a\u0443",correct:!0},{text:"\u0421\u0435\u0440\u0433\u0435\u044e \u0415\u0441\u0435\u043d\u0438\u043d\u0443",correct:!1},{text:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0443 \u041f\u0443\u0448\u043a\u0438\u043d\u0443",correct:!1}]},{id:13,question:"\u041a\u0430\u043a\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0443\u043b\u043a\u0430 \u043d\u0435\u0442 \u0432 \u041c\u043e\u0441\u043a\u0432\u0435?",answers:[{text:"\u0413\u0443\u0441\u044f\u0442\u043d\u0438\u043a\u043e\u0432\u0430",correct:!1},{text:"\u0412\u043e\u0440\u043e\u043d\u043e\u0432\u0430",correct:!0},{text:"\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u043e\u0433\u043e",correct:!1},{text:"\u0421\u043e\u0440\u043e\u043a\u0438\u043d\u0430",correct:!1}]},{id:14,question:"\u041a\u0430\u043a \u0427\u0435\u0445\u043e\u0432 \u043f\u0438\u0441\u0430\u043b \u043e\u0431 \u0410\u0439\u0432\u0430\u0437\u043e\u0432\u0441\u043a\u043e\u043c: \xab\u0411\u044b\u043b \u043f\u0440\u0438\u044f\u0442\u0435\u043b\u0435\u043c \u041f\u0443\u0448\u043a\u0438\u043d\u0430, \u043d\u043e \u041f\u0443\u0448\u043a\u0438\u043d\u0430\u2026\xbb?",answers:[{text:"\u043d\u0435 \u0447\u0438\u0442\u0430\u043b",correct:!0},{text:"\u043d\u0435 \u043b\u044e\u0431\u0438\u043b",correct:!1},{text:"\u043d\u0435 \u0440\u0438\u0441\u043e\u0432\u0430\u043b",correct:!1},{text:"\u043d\u0435 \u043e\u0434\u043e\u0431\u0440\u044f\u043b",correct:!1}]},{id:15,question:"\u041a\u0430\u043a\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435, \u0441\u0442\u0430\u0432\u0448\u0435\u0435 \u0444\u0440\u0430\u0437\u0435\u043e\u043b\u043e\u0433\u0438\u0437\u043c\u043e\u043c, \u0431\u044b\u043b\u043e \u0443 \u0446\u0438\u0440\u043a\u043e\u0432\u043e\u0433\u043e \u043d\u043e\u043c\u0435\u0440\u0430 \u0442\u0430\u043d\u0446\u043e\u0440\u0430 \u041c\u0430\u0442\u0443\u0441-\u041c\u0430\u0440\u0447\u0443\u043a\u0430?",answers:[{text:"\xab\u0411\u0440\u0435\u0434 \u0441\u0438\u0432\u043e\u0439 \u043a\u043e\u0431\u044b\u043b\u044b\xbb",correct:!1},{text:"\xab\u0411\u043e\u0440\u044c\u0431\u0430 \u043d\u0430\u043d\u0430\u0439\u0441\u043a\u0438\u0445 \u043c\u0430\u043b\u044c\u0447\u0438\u043a\u043e\u0432\xbb",correct:!0},{text:"\xab\u0411\u0443\u0440\u044f \u0432 \u0441\u0442\u0430\u043a\u0430\u043d\u0435 \u0432\u043e\u0434\u044b\xbb",correct:!1},{text:"\xab\u0417\u0430\u043a\u043e\u043b\u0434\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043a\u0440\u0443\u0433\xbb",correct:!1}]}],earnedMoney:"$ 0",stopGame:!1,timeGame:30,timerID:null,tryAgainGame:!1},I=function(e){return{type:"STOP-GAME",stopGame:e}},q=n(7),G=r.a.memo((function(e){var t=e.text,n=e.element,r=e.activeQuestion,a=e.disableAnswer,o=e.setDisableAnswer,i=Object(q.a)("https://allsoundsaround.com/wp-content/uploads/2020/12/otvet-vernyiy-5267.mp3?_=2"),u=Object(s.a)(i,2),m=u[0],l=u[1].stop,j=Object(q.a)("https://allsoundsaround.com/wp-content/uploads/2021/01/zvuk-nepravilnogo-otveta-vkto-hochet-stat-millionerom-5262-1.mp3?_=36"),d=Object(s.a)(j,1)[0],x=Object(_.c)((function(e){return e.quiz.timerID})),v=Object(c.useState)(w.a.answer),O=Object(s.a)(v,2),p=O[0],y=O[1],f=Object(_.b)(),h=function(e,t){setTimeout((function(){t()}),e)};return Object(b.jsx)("button",{className:p,onClick:function(){x&&clearInterval(x),o(!0),y("".concat(w.a.answer," ").concat(w.a.active)),h(1500,(function(){y(n.correct?"".concat(w.a.answer," ").concat(w.a.correct):"".concat(w.a.answer," ").concat(w.a.wrong))})),h(2500,(function(){n.correct?m():d()})),h(4500,(function(){n.correct?(f(function(e){return{type:"CHANGE-QUESTION",activeQuestion:e}}(r+1)),y(w.a.answer)):f(I(!0))})),h(6e3,(function(){l()}))},disabled:a,children:t})})),E=r.a.memo((function(e){var t=Object(_.c)((function(e){return e.quiz.questions})),n=Object(_.c)((function(e){return e.quiz.activeQuestion})),r=Object(c.useState)(null),a=Object(s.a)(r,2),o=a[0],i=a[1],u=Object(c.useState)(!1),m=Object(s.a)(u,2),l=m[0],j=m[1],d=Object(_.b)();return Object(c.useEffect)((function(){n!==t.length+1?(j(!1),i(t[n-1])):d(I(!0))}),[n,t,d]),Object(b.jsxs)("div",{className:f.a.task,children:[Object(b.jsx)("div",{className:f.a.question,children:null===o||void 0===o?void 0:o.question}),Object(b.jsx)("div",{className:f.a.answers,children:null===o||void 0===o?void 0:o.answers.map((function(e,t){return Object(b.jsx)(G,{element:e,text:e.text,activeQuestion:n,disableAnswer:l,setDisableAnswer:j},t)}))})]})})),g=r.a.memo((function(e){var t=e.activeQuestion,n=Object(q.a)("https://allsoundsaround.com/wp-content/uploads/2021/01/zvuk-nepravilnogo-otveta-vkto-hochet-stat-millionerom-5262-1.mp3?_=36"),r=Object(s.a)(n,1)[0],a=Object(_.b)(),o=Object(c.useState)(30),i=Object(s.a)(o,2),u=i[0],m=i[1];return Object(c.useEffect)((function(){var e=window.setInterval((function(){if(0===u)return r(),a(I(!0)),clearInterval(e);m((function(e){return e-1}))}),1e3);return a({type:"CHANGE-TIMER-ID",timerID:e}),function(){clearInterval(e)}}),[u,a]),Object(c.useEffect)((function(){m(30)}),[t]),Object(b.jsx)("span",{children:u})})),A=r.a.memo((function(){var e=Object(_.c)((function(e){return e.quiz})),t=e.stopGame,n=e.earnedMoney,c=e.questions,r=e.activeQuestion,a=e.userName,o=Object(_.b)(),s=function(){o({type:"TRY-GAME-AGAIN",tryAgainGame:!0})};return Object(b.jsx)("main",{className:p.a.main,children:t?Object(b.jsx)("h2",{className:p.a.result,children:r>c.length?Object(b.jsxs)("div",{className:p.a.winner,children:[Object(b.jsxs)("div",{children:[a," - you are winner!!!"]}),Object(b.jsxs)("div",{children:["You earned: ",Object(b.jsx)("span",{children:n})]}),Object(b.jsx)("button",{className:p.a.btnNewGame,onClick:s,children:"try again?"})]}):Object(b.jsxs)("div",{className:p.a.loose,children:[Object(b.jsxs)("div",{children:[a," - you earned:",Object(b.jsx)("span",{children:n})]}),Object(b.jsx)("button",{className:p.a.btnNewGame,onClick:s,children:"try again?"})]})}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:p.a.top,children:Object(b.jsx)("div",{className:p.a.timer,children:Object(b.jsx)(g,{activeQuestion:r})})}),Object(b.jsx)("div",{className:p.a.bottom,children:Object(b.jsx)(E,{})})]})})})),k=n(15),S=n.n(k),T=function(){var e=Object(_.b)(),t=Object(c.useState)(""),n=Object(s.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)(null),i=Object(s.a)(o,2),u=i[0],m=i[1];return Object(b.jsxs)("div",{className:S.a.start,children:[Object(b.jsx)("input",{className:u?S.a.inputError:"",type:"text",placeholder:"enter your name",value:r,onChange:function(e){m(null),a(e.currentTarget.value)}}),Object(b.jsx)("button",{onClick:function(){0!==r.length?e({type:"SET-USER-NAME",userName:r}):m("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f")},children:"Start game"})]})},Q=function(){var e=Object(_.c)((function(e){return e.quiz.userName})),t=Object(q.a)("https://allsoundsaround.com/wp-content/uploads/2020/12/zvuk-nachala-peredachi-kto-hochet-stat-millionerom-zastavki-5248.mp3?_=5"),n=Object(s.a)(t,2),r=n[0],a=n[1].stop;return Object(c.useEffect)((function(){e?a():r()}),[e,r,a]),Object(b.jsx)("div",{className:u.a.app,children:e?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(A,{}),Object(b.jsx)(v,{})]}):Object(b.jsx)(T,{})})},$=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))},C=n(16),z=Object(C.a)({quiz:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-QUESTION":return Object(M.a)(Object(M.a)({},e),{},{activeQuestion:t.activeQuestion,earnedMoney:e.pyramid[t.activeQuestion-2].amount});case"STOP-GAME":return e.activeQuestion<5?Object(M.a)(Object(M.a)({},e),{},{stopGame:t.stopGame,earnedMoney:"$ 0"}):e.activeQuestion<10?Object(M.a)(Object(M.a)({},e),{},{stopGame:t.stopGame,earnedMoney:"$ 1000"}):Object(M.a)(Object(M.a)({},e),{},{stopGame:t.stopGame,earnedMoney:"$ 32000"});case"CHANGE-TIMER-ID":return Object(M.a)(Object(M.a)({},e),{},{timerID:t.timerID});case"SET-USER-NAME":return Object(M.a)(Object(M.a)({},e),{},{userName:t.userName});case"TRY-GAME-AGAIN":return Object(M.a)({},N);default:return e}}}),L=Object(C.b)(z);o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(_.a,{store:L,children:Object(b.jsx)(Q,{})})}),document.getElementById("root")),$()}],[[28,1,2]]]);
//# sourceMappingURL=main.8f1ed71b.chunk.js.map