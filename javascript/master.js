$(function() {


  $('a').on('click',function (e) {
    e.preventDefault();
     $("body,html").animate({
       scrollTop: $( $(this).attr('href') ).offset().top},1800);
  });


  var gc=0,c=0,msc=0,j7=0,j8=0,o=0,t1=0,t2=0,p3=0,p2=0,c1=0,fpc=0,mc1=0,gnuc=0,delphi=0,ruby=0,php=0,py3=0,js=0,d=0,py2=0,ha=0,sc=0,oc=0;
  var pe=0,go=0;
  var total=0;


     $.ajax({
       type:'GET',
       url:'http://hackerearth.0x10.info/api/ctz_coders?type=json&query=list_submissions',
       dataType:'json',
       success:function(data) {
         $(data.websites).each(function(index,value) {

           $(".text").append("<div class='clearfix'></div><div class='col-lg-12 col-md-6 col-sm-12 col-xs-12' ><div class='panel panel-danger shadow'><div class='panel-heading '><h3 class='text-center'>"+value.title+"</h3></div><div class='panel-body'><br><p class='text-center'><span><i class='glyphicon glyphicon-tasks'></i><b> Status </b>: "+value.compiler_status+"</span><span><br><br><i class='glyphicon glyphicon-compressed'></i> <b>Language used: </b>"+value.language+"</span></p><br><p class='text-center '> <b> <i class='glyphicon glyphicon-pencil'></i> Source Code: </b> <code><pre>"+value.source_code.replace(/</g,'&lt;')+"</pre></code></p><br><br></div></div><div class='clearfix'></div>");

              if(value.language == 'GNU C++11')
              { gc++; }
              else if(value.language == 'GNU C++') {
                c++; }
              else if(value.language == 'MS C++') {
                msc++; }
              else if(value.language == 'Java 7') {
                j7++; }
              else if(value.language == 'Java 8') {
                j8++; }
              else if(value.language == 'Python 3') {
                py3++; }
              else if(value.language == 'MS C#') {
                c1++; }
              else if(value.language == 'Mono C#') {
                mc1++; }
              else if(value.language == 'FPC') {
                fpc++; }
              else if(value.language == 'GNU C') {
                gnuc++; }
              else if(value.language == 'Python 2') {
                py2++; }
              else if(value.language == 'Delphi') {
                delphi++; }
                else if(value.language == 'Ruby') {
                  ruby++; }
                  else if(value.language == 'PHP') {
                    php++; }
                  else if(value.language == 'PyPy 3') {
                    p3++; }
                  else if(value.language == 'PyPy 2') {
                    p2++; }
                  else if(value.language == 'JavaScript') {
                    js++; }
                  else if(value.language == 'D') {
                    d++; }
                  else if(value.language == 'Haskell') {
                    ha++; }
                  else if(value.language == 'Scala') {
                    sc++; }
                  else if(value.language == 'Ocaml') {
                        oc++; }
                  else if(value.language == 'Perl') {
                    pe++; }
                  else if(value.language == 'Go') {
                    go++; }


              if(value.title == '573E - Bear and Bowling')
              {
                t1++;
              }
              else if(value.title == '574B - Bear and Three Musketeers')
              {
                t2++;
              }

             total = index;


         });

                     $('.total').append(total);

                     if(t1 > t2)
                     {
                       $('.top-2').append('<p> 573E - Bear and Bowling : '+t1+'<p><p>  '+t2+'</p>');

                     }
                     else {
                       $('.top-2').append('<p> 574B - Bear and Three Musketeers :  '+t2+'<p><p> 573E - Bear and Bowling : '+t1+'</p>');

                     }


       }

     });

});
