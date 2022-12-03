var currentPositionLeftRight=1;
var currentPositionTopBottom=1;
var w=600;
var h=300;
var globalSize=0;
        
    function fStartVariable(){
        var mainTime=setInterval(fTime,100);
    }

    function fTime(){
        if(currentPositionLeftRight<(w/globalSize)){
            fPosition('main','left','50');
        }
        /* if(currentPositionTopBottom<(h/globalSize)){
            fPosition('main','top','50');
        }
        if(currentPositionLeftRight<(w/globalSize)){
            fPosition('main','right','50');
        }
        if(currentPositionLeftRight<(h/globalSize)){
            fPosition('main','bottom','50');
        } */
    }
        
        function fPosition(elementId,parametr,size){
            globalSize=size;
            if(parametr=="left"){
                if(currentPositionLeftRight<=((w/size)-1)){
                    document.getElementById(elementId).style.left=(size*currentPositionLeftRight)+"px";
                    currentPositionLeftRight++;
                }
            }
            if(parametr=="right"){
                if(currentPositionLeftRight>1){
                    currentPositionLeftRight--;
                    document.getElementById(elementId).style.left=(size*(currentPositionLeftRight-1))+"px";
                }
            }
            if(parametr=="bottom"){
                if(currentPositionTopBottom<=((h/size)-1)){
                    document.getElementById(elementId).style.top=(size*currentPositionTopBottom)+"px";
                    currentPositionTopBottom++;
                }
            }
            if(parametr=="top"){
                if(currentPositionTopBottom>1){
                    currentPositionTopBottom--;
                    document.getElementById(elementId).style.top=(size*(currentPositionTopBottom-1))+"px";
                }
            }
        }

        var variableOfChangeColor=1;
        function fChangeColor(){
            variableOfChangeColor++;
            if(variableOfChangeColor==2){
                document.getElementById("main").style.backgroundColor="blue";
            }
            if(variableOfChangeColor==3){
                document.getElementById("main").style.backgroundColor="red";
                variableOfChangeColor=1;
            }
        }

        function hideonclick(){
            document.getElementById("main").style.display="none";
        }
        function showonclick(){
            document.getElementById("main").style.display="block";
        }
        var variableShowHideOnclick=1;
        function showHideOnclick(){
            variableShowHideOnclick++;
            if(variableShowHideOnclick==2){
                document.getElementById("main").style.display="none";
            }
            if(variableShowHideOnclick==3){
                document.getElementById("main").style.display="block";
                variableShowHideOnclick=1;
            }
        }

        function bigDiv(){
            document.getElementById("main").style.height="100px";
            document.getElementById("main").style.width="100px";
        }
        function smallDiv(){
            document.getElementById("main").style.height="50px";
            document.getElementById("main").style.width="50px";
        }
        var variableBigSmallDiv=1;
        function bigSmallDiv(){
            variableBigSmallDiv++;
            if(variableBigSmallDiv==2){
                document.getElementById("main").style.height="100px";
                document.getElementById("main").style.width="100px";
            }
            if(variableBigSmallDiv==3){
                document.getElementById("main").style.height="50px";
                document.getElementById("main").style.width="50px";
                variableBigSmallDiv=1;
            }
        }

        var variableOfBtnChangeColor=1;
        $("#btnChangeColor").click(function(){
            variableOfBtnChangeColor++;
            if(variableOfBtnChangeColor==2){
                $("#second").css("background-color","green");
            }
            if(variableOfBtnChangeColor==3){
                $("#second").css("background-color","purple");
                variableOfBtnChangeColor=1;
            }
        });

        var newVariable1=1;
        $("#btnNew").click(function(){
            $("#second").css("left",(50*newVariable1)+"px");
            newVariable1++;
        });

        $("#btnHide").click(function(){
            $("#second").hide();
        });
        $("#btnShow").click(function(){
            $("#second").show();
        });
        $("#btnShowHide").click(function(){
            $("#second").toggle();
        });
