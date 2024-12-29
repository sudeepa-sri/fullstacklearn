function valid(date){
    dates=date.split('/');
    day=parseInt(dates[0]); 
    mnth=parseInt(dates[1]); 
    yr=parseInt(dates[2]); 
    console.log(day);
  if(mnth==2 )
  {
     if(day>=1 & day<=28)
     {
         console.log("Valid Date");
     }
     else if(day==29)
     {
        if(yr%4==0)
        {
         if(yr%100==0)
         {
             if(yr%400==0)
             {
                 console.log("Valid Date");
             }
             else{
                 console.log("InValid Date");
             }
         }
         else{
             console.log("Valid Date");
         }
        }
        else
        {
         console.log("InValid Date");
        }
     }
     else
        {
         console.log("InValid Date");
        }
 
  }
 else{
   if(day>=1 & day<=30)
   {
     if(mnth>=1 & mnth<=12)
     {
         console.log("Valid Date");
     }
     else
        {
         console.log("InValid Date");
        }
   }
   else if(day==31)
   {
     if(mnth==1 | mnth==3 | mnth==5 | mnth==7 | mnth==8 | mnth==10 | mnth ==12)
     {
         console.log("Valid Date");
     }
     else
        {
         console.log("InValid Date");
        }
   }
   else
        {
         console.log("InValid Date");
        }
  }
 }
 let date="31/04/2024";
 valid(date);
 let date1="29/02/2001";
 valid(date1);
 