(this.webpackJsonpmillionaire_quiz=this.webpackJsonpmillionaire_quiz||[]).push([[0],[,,,,,function(e,t,c){e.exports={main:"Main_main__XISJd",top:"Main_top__zWCab",bottom:"Main_bottom__2tXz3",timer:"Main_timer__2b_4t",result:"Main_result__1oc_6",panel:"Main_panel__11V0h",btnNewGame:"Main_btnNewGame__1CDTl"}},function(e,t,c){e.exports={answer:"Answer_answer__3p7o9",active:"Answer_active__2p0Yo",correct:"Answer_correct__3NbBK",wrong:"Answer_wrong__1iMRQ"}},,function(e,t,c){e.exports={moneyListItem:"MoneyItem_moneyListItem__3134B",moneyListItem__number:"MoneyItem_moneyListItem__number__2uGB-",moneyListItem__amount:"MoneyItem_moneyListItem__amount__3_rtU",active:"MoneyItem_active__2fv9o",save:"MoneyItem_save__eGNdE"}},,function(e,t,c){e.exports={task:"BlockTask_task__12FiH",question:"BlockTask_question__2mwRD",answers:"BlockTask_answers__2wETs"}},,,function(e,t,c){e.exports={pyramid:"Pyramid_pyramid__3-aCZ",moneyList:"Pyramid_moneyList__2RtXT"}},,function(e,t,c){e.exports={start:"StartGame_start__3nmD2",inputError:"StartGame_inputError__1h5Ey"}},,function(e,t,c){e.exports={app:"App_app__10CKc"}},,,,,function(e,t,c){},,,,,,function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(9),o=c.n(a),s=(c(22),c(3)),i=c(17),u=c.n(i),m=c(13),j=c.n(m),b=c(8),d=c.n(b),l=c(1),x=r.a.memo((function(e){var t=e.id,c=e.amount,n=e.activeQuestion,r=e.saveMoney,a=n===t?"".concat(d.a.moneyListItem," ").concat(d.a.active):d.a.moneyListItem,o=r?d.a.save:"";return Object(l.jsxs)("li",{className:"".concat(a," ").concat(o),children:[Object(l.jsx)("span",{className:d.a.moneyListItem__number,children:t}),Object(l.jsx)("span",{className:d.a.moneyListItem__amount,children:c})]})})),O=c(2),_=r.a.memo((function(){var e=Object(O.c)((function(e){return e.quiz.pyramid})),t=Object(O.c)((function(e){return e.quiz.activeQuestion}));return Object(l.jsx)("div",{className:j.a.pyramid,children:Object(l.jsx)("ul",{className:j.a.moneyList,children:e.map((function(e){return Object(l.jsx)(x,{id:e.id,saveMoney:e.saveMoney,amount:e.amount,activeQuestion:t},e.id)})).reverse()})})})),v=c(5),p=c.n(v),y=c(10),f=c.n(y),h=c(6),w=c.n(h),M=c(4),N={userName:null,pyramid:[{id:1,amount:"$ 100",saveMoney:!1},{id:2,amount:"$ 200",saveMoney:!1},{id:3,amount:"$ 300",saveMoney:!1},{id:4,amount:"$ 500",saveMoney:!1},{id:5,amount:"$ 1000",saveMoney:!0},{id:6,amount:"$ 2000",saveMoney:!1},{id:7,amount:"$ 4000",saveMoney:!1},{id:8,amount:"$ 8000",saveMoney:!1},{id:9,amount:"$ 16000",saveMoney:!1},{id:10,amount:"$ 32000",saveMoney:!0},{id:11,amount:"$ 64000",saveMoney:!1},{id:12,amount:"$ 125000",saveMoney:!1},{id:13,amount:"$ 250000",saveMoney:!1},{id:14,amount:"$ 500000",saveMoney:!1},{id:15,amount:"$ 1000000",saveMoney:!1}],activeQuestion:1,questions:[{id:1,question:"\u041e\u0442\u043a\u0443\u0434\u0430 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438 \u043e\u0444\u0438\u0441\u043e\u0432 \u043d\u0430\u043b\u0438\u0432\u0430\u044e\u0442 \u0432 \u0447\u0430\u0448\u043a\u0438 \u0432\u043e\u0434\u0443?",answers:[{text:"\u0438\u0437 \u043f\u0440\u0438\u043d\u0442\u0435\u0440\u0430",correct:!1},{text:"\u0438\u0437 \u0441\u043a\u0430\u043d\u0435\u0440\u0430",correct:!1},{text:"\u0438\u0437 \u0441\u0442\u0435\u043f\u043b\u0435\u0440\u0430",correct:!1},{text:"\u0438\u0437 \u043a\u0443\u043b\u0435\u0440\u0430",correct:!0}]},{id:2,question:"\u0427\u0442\u043e \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u043b \u0414\u0436\u0435\u043a \u0432 \u0441\u0442\u0438\u0445\u043e\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u0438, \u043f\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u043c \u0441 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u041c\u0430\u0440\u0448\u0430\u043a\u043e\u043c?",answers:[{text:"\u043c\u0430\u0440\u0448\u0440\u0443\u0442",correct:!1},{text:"\u0433\u0440\u0430\u0444\u0438\u043a",correct:!1},{text:"\u0434\u043e\u043c",correct:!0},{text:"\u043a\u043e\u043c\u043c\u0443\u043d\u0438\u0437\u043c",correct:!1}]},{id:3,question:"\u0427\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u0443\u0442\u044c \u043d\u0430 \u0448\u0430\u0445\u043c\u0430\u0442\u043d\u043e\u0439 \u0434\u043e\u0441\u043a\u0435?",answers:[{text:"\u0432\u0435\u0447\u043d\u044b\u0439 \u0448\u0430\u0445",correct:!0},{text:"\u0432\u0435\u0447\u043d\u044b\u0439 \u043c\u0430\u0442",correct:!1},{text:"\u0432\u0435\u0447\u043d\u044b\u0439 \u0437\u043e\u0432",correct:!1},{text:"\u0432\u0435\u0447\u043d\u044b\u0439 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043b\u044c",correct:!1}]},{id:4,question:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u043a\u0430\u0440\u0448\u0435\u0440\u0438\u043d\u0433?",answers:[{text:"\u0441\u0435\u043a\u043e\u043d\u0434-\u0445\u0435\u043d\u0434",correct:!1},{text:"\u043d\u0430\u043f\u043e\u043b\u044c\u043d\u044b\u0439 \u0441\u0432\u0435\u0442\u0438\u043b\u044c\u043d\u0438\u043a",correct:!1},{text:"\u0431\u0440\u0430\u0447\u043d\u044b\u0439 \u0442\u0430\u043d\u0435\u0446 \u0432\u043e\u0440\u043e\u043d\u044b",correct:!1},{text:"\u0430\u0440\u0435\u043d\u0434\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f",correct:!0}]},{id:5,question:"\u041a\u0430\u043a\u0438\u0435 \u043c\u0443\u0436\u0447\u0438\u043d\u044b, \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u044d\u0442\u0438\u043a\u0435\u0442\u0443, \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u043d\u044b \u0438\u0434\u0442\u0438 \u0441\u043b\u0435\u0432\u0430 \u043e\u0442 \u0434\u0430\u043c\u044b?",answers:[{text:"\u0432\u044b\u0441\u043e\u043a\u0438\u0435",correct:!1},{text:"\u043f\u043e\u0436\u0438\u043b\u044b\u0435",correct:!1},{text:"\u0438\u043d\u043e\u0433\u043e\u0440\u043e\u0434\u043d\u0438\u0435",correct:!1},{text:"\u0432\u043e\u0435\u043d\u043d\u043e\u0441\u043b\u0443\u0436\u0430\u0449\u0438\u0435",correct:!0}]},{id:6,question:"\u041a\u0430\u043a\u0443\u044e \u043f\u0435\u0441\u043d\u044e \u0440\u0430\u0441\u043f\u0435\u0432\u0430\u0435\u0442 \u043f\u0440\u0438 \u043d\u0430\u0440\u043e\u0434\u0435 \u0431\u0435\u043b\u043e\u0447\u043a\u0430 \u0432 \xab\u0421\u043a\u0430\u0437\u043a\u0435 \u043e \u0446\u0430\u0440\u0435 \u0421\u0430\u043b\u0442\u0430\u043d\u0435\xbb?",answers:[{text:"\xab\u0412\u043e \u043f\u043e\u043b\u0435 \u0431\u0435\u0440\u0435\u0437\u0430 \u0441\u0442\u043e\u044f\u043b\u0430\xbb",correct:!1},{text:"\xab\u0412\u043e \u043a\u0443\u0437\u043d\u0438\u0446\u0435\xbb",correct:!1},{text:"\xab\u0412\u043e \u0441\u0430\u0434\u0443 \u043b\u0438, \u0432 \u043e\u0433\u043e\u0440\u043e\u0434\u0435\xbb",correct:!0},{text:"\xab\u0412\u043e\u0442 \u043a\u0442\u043e-\u0442\u043e \u0441 \u0433\u043e\u0440\u043e\u0447\u043a\u0438 \u0441\u043f\u0443\u0441\u0442\u0438\u043b\u0441\u044f\xbb",correct:!1}]},{id:7,question:"\u041a\u0442\u043e \xab\u043f\u043e\u043c\u043e\u0433\u0430\u043b\xbb \u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u0438 \u0432 \u0441\u0443\u0434\u043e\u0432\u043e\u043c \u0436\u0443\u0440\u043d\u0430\u043b\u0435 \u043f\u043b\u043e\u0442\u0430 \xab\u041a\u043e\u043d-\u0422\u0438\u043a\u0438\xbb \u0422\u0443\u0440\u0430 \u0425\u0435\u0439\u0435\u0440\u0434\u0430\u043b\u0430?",answers:[{text:"\u0447\u0430\u0439\u043a\u0438",correct:!1},{text:"\u043a\u0430\u0440\u0430\u043a\u0430\u0442\u0438\u0446\u044b",correct:!0},{text:"\u0434\u0435\u043b\u044c\u0444\u0438\u043d\u044b",correct:!1},{text:"\u043a\u0440\u044b\u0441\u044b",correct:!1}]},{id:8,question:"\u041a\u0430\u043a\u043e\u0439 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043b\u0438\u0448\u0435\u043d \u043a\u0440\u0443\u043f\u044c\u0435 \u043a\u0430\u0437\u0438\u043d\u043e?",answers:[{text:"\u043f\u0440\u0438\u0433\u043b\u0430\u0434\u0438\u0442\u044c \u0440\u0443\u043a\u043e\u0439 \u0432\u043e\u043b\u043e\u0441\u044b",correct:!1},{text:"\u0441\u043d\u044f\u0442\u044c \u043f\u044b\u043b\u0438\u043d\u043a\u0443 \u0441 \u0436\u0438\u043b\u0435\u0442\u0430",correct:!1},{text:"\u043f\u043e\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0433\u0430\u043b\u0441\u0442\u0443\u043a",correct:!1},{text:"\u0434\u043e\u0441\u0442\u0430\u0442\u044c \u043f\u043b\u0430\u0442\u043e\u043a \u0438\u0437 \u043a\u0430\u0440\u043c\u0430\u043d\u0430",correct:!0}]},{id:9,question:"\u0412 \u043a\u0430\u043a\u043e\u043c \u043a\u0438\u043d\u043e\u0444\u0438\u043b\u044c\u043c\u0435 \u043d\u0435\u0442 \u0441\u0446\u0435\u043d\u044b \u043d\u0430 \u044d\u043a\u0437\u0430\u043c\u0435\u043d\u0435?",answers:[{text:"\xab\u0414\u043e\u0436\u0438\u0432\u0435\u043c \u0434\u043e \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a\u0430\xbb",correct:!0},{text:"\xab\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \xab\u042b\xbb\u2026\xbb",correct:!1},{text:"\xab\u0421\u0442\u0430\u0440\u0438\u043a \u0425\u043e\u0442\u0442\u0430\u0431\u044b\u0447\xbb",correct:!1},{text:"\xab\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u0430\xbb",correct:!1}]},{id:10,question:"\u0427\u0442\u043e \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0432\u0441\u0435\u0445 \u0434\u0432\u043e\u0440\u0446\u043e\u0432 \u0417\u0430\u043f\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430 \u043a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0445 \u0438\u043c\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u0432?",answers:[{text:"\u0434\u0432\u0435\u0440\u0438",correct:!1},{text:"\u043b\u0435\u0441\u0442\u043d\u0438\u0446\u044b",correct:!1},{text:"\u043e\u043a\u043d\u0430",correct:!1},{text:"\xab\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u0430\xbb",correct:!0}]},{id:11,question:"\u041a\u0430\u043a\u0430\u044f \u043a\u043d\u0438\u0433\u0430 \u0432 \u0442\u0430\u043a \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u043e\u0439 \xab\u043c\u0430\u043a\u0443\u043b\u0430\u0442\u0443\u0440\u043d\u043e\u0439 \u0441\u0435\u0440\u0438\u0438\xbb \u0421\u0421\u0421\u0420 \u0432\u044b\u0448\u043b\u0430 \u043f\u0435\u0440\u0432\u043e\u0439?",answers:[{text:"\xab\u0421\u043e\u0431\u043e\u0440 \u041f\u0430\u0440\u0438\u0436\u0441\u043a\u043e\u0439 \u0411\u043e\u0433\u043e\u043c\u0430\u0442\u0435\u0440\u0438\xbb",correct:!1},{text:"\xab\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0430 \u041c\u0430\u0440\u0433\u043e\xbb",correct:!0},{text:"\xab\u041b\u0443\u043d\u043d\u044b\u0439 \u043a\u0430\u043c\u0435\u043d\u044c\xbb",correct:!1},{text:"\xab\u0421\u043e\u0431\u0430\u043a\u0430 \u0411\u0430\u0441\u043a\u0435\u0440\u0432\u0438\u043b\u0435\u0439\xbb",correct:!1}]},{id:12,question:"\u041a\u043e\u043c\u0443 \u0410\u043d\u043d\u0430 \u0410\u0445\u043c\u0430\u0442\u043e\u0432\u0430 \u043f\u043e\u0441\u0432\u044f\u0442\u0438\u043b\u0430 \u0441\u0442\u0438\u0445\u043e\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u0435 \xab\u042f \u043f\u0440\u0438\u0448\u043b\u0430 \u043a \u043f\u043e\u044d\u0442\u0443 \u0432 \u0433\u043e\u0441\u0442\u0438\xbb?",answers:[{text:"\u041d\u0438\u043a\u043e\u043b\u0430\u044e \u0413\u0443\u043c\u0438\u043b\u0435\u0432\u0443",correct:!1},{text:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0443 \u0411\u043b\u043e\u043a\u0443",correct:!0},{text:"\u0421\u0435\u0440\u0433\u0435\u044e \u0415\u0441\u0435\u043d\u0438\u043d\u0443",correct:!1},{text:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0443 \u041f\u0443\u0448\u043a\u0438\u043d\u0443",correct:!1}]},{id:13,question:"\u041a\u0430\u043a\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0443\u043b\u043a\u0430 \u043d\u0435\u0442 \u0432 \u041c\u043e\u0441\u043a\u0432\u0435?",answers:[{text:"\u0413\u0443\u0441\u044f\u0442\u043d\u0438\u043a\u043e\u0432\u0430",correct:!1},{text:"\u0412\u043e\u0440\u043e\u043d\u043e\u0432\u0430",correct:!0},{text:"\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u043e\u0433\u043e",correct:!1},{text:"\u0421\u043e\u0440\u043e\u043a\u0438\u043d\u0430",correct:!1}]},{id:14,question:"\u041a\u0430\u043a \u0427\u0435\u0445\u043e\u0432 \u043f\u0438\u0441\u0430\u043b \u043e\u0431 \u0410\u0439\u0432\u0430\u0437\u043e\u0432\u0441\u043a\u043e\u043c: \xab\u0411\u044b\u043b \u043f\u0440\u0438\u044f\u0442\u0435\u043b\u0435\u043c \u041f\u0443\u0448\u043a\u0438\u043d\u0430, \u043d\u043e \u041f\u0443\u0448\u043a\u0438\u043d\u0430\u2026\xbb?",answers:[{text:"\u043d\u0435 \u0447\u0438\u0442\u0430\u043b",correct:!0},{text:"\u043d\u0435 \u043b\u044e\u0431\u0438\u043b",correct:!1},{text:"\u043d\u0435 \u0440\u0438\u0441\u043e\u0432\u0430\u043b",correct:!1},{text:"\u043d\u0435 \u043e\u0434\u043e\u0431\u0440\u044f\u043b",correct:!1}]},{id:15,question:"\u041a\u0430\u043a\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435, \u0441\u0442\u0430\u0432\u0448\u0435\u0435 \u0444\u0440\u0430\u0437\u0435\u043e\u043b\u043e\u0433\u0438\u0437\u043c\u043e\u043c, \u0431\u044b\u043b\u043e \u0443 \u0446\u0438\u0440\u043a\u043e\u0432\u043e\u0433\u043e \u043d\u043e\u043c\u0435\u0440\u0430 \u0442\u0430\u043d\u0446\u043e\u0440\u0430 \u041c\u0430\u0442\u0443\u0441-\u041c\u0430\u0440\u0447\u0443\u043a\u0430?",answers:[{text:"\xab\u0411\u0440\u0435\u0434 \u0441\u0438\u0432\u043e\u0439 \u043a\u043e\u0431\u044b\u043b\u044b\xbb",correct:!1},{text:"\xab\u0411\u043e\u0440\u044c\u0431\u0430 \u043d\u0430\u043d\u0430\u0439\u0441\u043a\u0438\u0445 \u043c\u0430\u043b\u044c\u0447\u0438\u043a\u043e\u0432\xbb",correct:!0},{text:"\xab\u0411\u0443\u0440\u044f \u0432 \u0441\u0442\u0430\u043a\u0430\u043d\u0435 \u0432\u043e\u0434\u044b\xbb",correct:!1},{text:"\xab\u0417\u0430\u043a\u043e\u043b\u0434\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043a\u0440\u0443\u0433\xbb",correct:!1}]}],earnedMoney:"$ 0",stopGame:!1,timeGame:30,timerID:null,tryAgainGame:!1},I=function(e){return{type:"STOP-GAME",stopGame:e}},q=c(7),G=c.p+"static/media/right.1785c803.mp3",E=c.p+"static/media/wrong.585aa0fd.mp3",g=r.a.memo((function(e){var t=e.text,c=e.element,r=e.activeQuestion,a=e.disableAnswer,o=e.setDisableAnswer,i=Object(q.a)(G),u=Object(s.a)(i,2),m=u[0],j=u[1].stop,b=Object(q.a)(E),d=Object(s.a)(b,1)[0],x=Object(O.c)((function(e){return e.quiz.timerID})),_=Object(n.useState)(w.a.answer),v=Object(s.a)(_,2),p=v[0],y=v[1],f=Object(O.b)(),h=function(e,t){setTimeout((function(){t()}),e)};return Object(l.jsx)("button",{className:p,onClick:function(){x&&clearInterval(x),o(!0),y("".concat(w.a.answer," ").concat(w.a.active)),h(1500,(function(){y(c.correct?"".concat(w.a.answer," ").concat(w.a.correct):"".concat(w.a.answer," ").concat(w.a.wrong))})),h(2e3,(function(){c.correct?m():d()})),h(4500,(function(){c.correct?(f(function(e){return{type:"CHANGE-QUESTION",activeQuestion:e}}(r+1)),y(w.a.answer)):f(I(!0))})),h(6e3,(function(){j()}))},disabled:a,children:t})})),A=r.a.memo((function(e){var t=Object(O.c)((function(e){return e.quiz.questions})),c=Object(O.c)((function(e){return e.quiz.activeQuestion})),r=Object(n.useState)(null),a=Object(s.a)(r,2),o=a[0],i=a[1],u=Object(n.useState)(!1),m=Object(s.a)(u,2),j=m[0],b=m[1],d=Object(O.b)();return Object(n.useEffect)((function(){c!==t.length+1?(b(!1),i(t[c-1])):d(I(!0))}),[c,t,d]),Object(l.jsxs)("div",{className:f.a.task,children:[Object(l.jsx)("div",{className:f.a.question,children:null===o||void 0===o?void 0:o.question}),Object(l.jsx)("div",{className:f.a.answers,children:null===o||void 0===o?void 0:o.answers.map((function(e,t){return Object(l.jsx)(g,{element:e,text:e.text,activeQuestion:c,disableAnswer:j,setDisableAnswer:b},t)}))})]})})),T=c.p+"static/media/finishTime.ba27af01.mp3",S=r.a.memo((function(e){var t=e.activeQuestion,c=Object(q.a)(T),r=Object(s.a)(c,1)[0],a=Object(O.b)(),o=Object(n.useState)(30),i=Object(s.a)(o,2),u=i[0],m=i[1];return Object(n.useEffect)((function(){var e=window.setInterval((function(){if(0===u)return r(),a(I(!0)),clearInterval(e);m((function(e){return e-1}))}),1e3);return a({type:"CHANGE-TIMER-ID",timerID:e}),function(){clearInterval(e)}}),[u,a,r]),Object(n.useEffect)((function(){m(30)}),[t]),Object(l.jsx)("span",{children:u})})),Q=r.a.memo((function(){var e=Object(O.c)((function(e){return e.quiz})),t=e.stopGame,c=e.earnedMoney,n=e.questions,r=e.activeQuestion,a=e.userName,o=Object(O.b)(),s=function(){o({type:"TRY-GAME-AGAIN",tryAgainGame:!0})};return Object(l.jsx)("main",{className:p.a.main,children:t?Object(l.jsx)("h2",{className:p.a.result,children:r>n.length?Object(l.jsxs)("div",{className:p.a.panel,children:[Object(l.jsx)("div",{children:a}),Object(l.jsx)("div",{children:"you are winner!!!"}),Object(l.jsxs)("div",{children:["You earned: ",Object(l.jsx)("span",{children:c})]}),Object(l.jsx)("button",{className:p.a.btnNewGame,onClick:s,children:"try again?"})]}):Object(l.jsxs)("div",{className:p.a.panel,children:[Object(l.jsx)("div",{children:a}),Object(l.jsxs)("div",{children:["You earned: ",Object(l.jsx)("span",{children:c})]}),Object(l.jsx)("button",{className:p.a.btnNewGame,onClick:s,children:"try again?"})]})}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:p.a.top,children:Object(l.jsx)("div",{className:p.a.timer,children:Object(l.jsx)(S,{activeQuestion:r})})}),Object(l.jsx)("div",{className:p.a.bottom,children:Object(l.jsx)(A,{})})]})})})),$=c(15),C=c.n($),k=function(){var e=Object(O.b)(),t=Object(n.useState)(""),c=Object(s.a)(t,2),r=c[0],a=c[1],o=Object(n.useState)(null),i=Object(s.a)(o,2),u=i[0],m=i[1];return Object(l.jsxs)("div",{className:C.a.start,children:[Object(l.jsx)("input",{className:u?C.a.inputError:"",type:"text",placeholder:"enter your name",value:r,onChange:function(e){m(null),a(e.currentTarget.value)}}),Object(l.jsx)("button",{onClick:function(){0!==r.length?e({type:"SET-USER-NAME",userName:r}):m("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f")},children:"Start game"})]})},L=c.p+"static/media/start_game.2b4833d2.mp3",D=function(){var e=Object(O.c)((function(e){return e.quiz.userName})),t=Object(q.a)(L),c=Object(s.a)(t,2),r=c[0],a=c[1].stop;return Object(n.useEffect)((function(){e?a():r()}),[e,r,a]),Object(l.jsx)("div",{className:u.a.app,children:e?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Q,{}),Object(l.jsx)(_,{})]}):Object(l.jsx)(k,{})})},z=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,31)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),a(e),o(e)}))},R=c(16),B=Object(R.a)({quiz:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-QUESTION":return Object(M.a)(Object(M.a)({},e),{},{activeQuestion:t.activeQuestion,earnedMoney:e.pyramid[t.activeQuestion-2].amount});case"STOP-GAME":return e.activeQuestion<5?Object(M.a)(Object(M.a)({},e),{},{stopGame:t.stopGame,earnedMoney:"$ 0"}):e.activeQuestion<10?Object(M.a)(Object(M.a)({},e),{},{stopGame:t.stopGame,earnedMoney:"$ 1000"}):Object(M.a)(Object(M.a)({},e),{},{stopGame:t.stopGame,earnedMoney:"$ 32000"});case"CHANGE-TIMER-ID":return Object(M.a)(Object(M.a)({},e),{},{timerID:t.timerID});case"SET-USER-NAME":return Object(M.a)(Object(M.a)({},e),{},{userName:t.userName});case"TRY-GAME-AGAIN":return Object(M.a)({},N);default:return e}}}),F=Object(R.b)(B);o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(O.a,{store:F,children:Object(l.jsx)(D,{})})}),document.getElementById("root")),z()}],[[28,1,2]]]);
//# sourceMappingURL=main.f4e734a2.chunk.js.map