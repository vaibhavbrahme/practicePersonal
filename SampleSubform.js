function Changecolor(params) 
{
    window.CustonAPNamespace ={};
    
    var options = {fieldId='Subform1/Status'};
    eformHelper.getFieldValue(options, function(result)
    {
        if (result.isSuccess) 
        {
            window.CustonAPNamespace.status = result.data;    
        }
    });

    var status = window.CustonAPNamespace.status;
    status = status.split(",");

    var fields = $('input[id^="Location-"]');

    for(var i=0; i<status.length; i++)
    {
        var field = fields.eq(i)[0];
        if (status[i]==="Normal")
        {
            field.classList.add("Open");
        }
        if(status[i]==="Open at 10AM")
        {
            field.classList.add("Delayed");
        }
        else if(status[i]==="Closed")
        {
            field.classList.add("Closed");
        }
        else
        {
            field.classList.add("Unknown");
        }
    }
}