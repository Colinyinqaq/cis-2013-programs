//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));

floatMidPts = parseFloat(prompt("Please enter Mid pts (0-35)"));

floatFinPts = parseFloat(prompt("Please enter Final pts (0-35)"));

floatTotalPts = parseFloat(FloatHwPts + floatMidPts + floatFinPts);

intGradeOption = parseFloat(prompt("Please enter 1 for Pass/Fail Or 2 for Letter Grade"));
    //code


if (intGradeOption===1)
{
    if(floatTotalPts >= 80)
    {
        stringMessage = "pass";
    }
    else
    {
    stringMessage = "fail";
    }
}
else
{
    if (floatTotalPts>= 90)
    {
        stringMessage= "A";
    }
    else
    {
        if (floatTotalPts>= 80 && floatTotalPts < 90)
        {
            stringMessage= "B";
        }
        else
        {
            if (floatTotalPts>= 70 && floatTotalPts < 80)
            {
                stringMessage= "C";
            }
            else
            {
                if (floatTotalPts>= 60 && floatTotalPts < 70)
                {
                    stringMessage= "D";
                }
                else
                {
                    stringMessage= "F";
                }
            }
        }
    }
}









alert("Your final grade is: " +stringFinalGrade);