var ShallI = true;

$(document).ready(
 function()
 {
  LoadFeed();
  setInterval("LoadFeed();", 60000);
  LoadMessages();
  setInterval("LoadMessages();", 60000);
 }
);
function updatevar()
{
	ShallI = false;
}
function updatevar1()
{
	ShallI = true;
}
function LoadMessages()
{
 $.get("getconvo.php",
  function(data)
  {
    $('div#messagesmenu').html(data);
  }
 );
}
function LoadFeed()
{
	if(ShallI == false)
	{
		return;
	}
 $.get("feed.php",
  function(data)
  {
   $('div#feed').html(data);
  }
 );
}

function LoadList()
{
 $.get("friends_feed.php",
  function(data)
  {
   $('div#friendsfeed').html(data);
  }
 );
}

function DeleteShout(ID)
{
 $.get("delete_shout.php?postid="+ID,
  function(data)
  {
   $("div#feeditem-" + ID).animate({"width":0, "height":0, "opacity":"0.5"}, "fast", function() { $(this).delay(100).remove(); });
   $("div.commentbox-" + ID).animate({"width":0, "height":0, "opacity":"0.5"}, "fast", function() { $(this).delay(100).remove(); });
  }
 );
}
function DeleteComment(ID)
{
 $.get("delete_comment.php?commentid="+ID,
  function(data)
  {
   $("div#comment-" + ID).animate({"width":0, "border":"none", "height":0, "opacity":"0.5"}, "fast", function() { $(this).delay(100).remove(); });
  }
 );
}

function RateShout(ID)
{
 $.get("rate_shout.php?postid="+ID,
  function(data)
  {
   LoadFeed();
  }
 );
}

// Writen by: Marky Ross
// Modified by: Leighton Tidwell

var Cache = Array();
function CacheData(Name, URL)
{
 $.get(URL,
  function(data)
  {
   Cache[Name] = data;
  }
 );
}

var CurrentNav = "cake";

function Animate_Nav(object, element, cachedata)
{
	$("div#feed").find(CurrentNav).animate(
	{
		"width":"250px",
		"height":"0px",
		"overflow":"hidden",
		"z-index":"4",
		"display":"none"
	},
	200
	);

	$("div#feed").find(CurrentNav).html(" ");

	var elementstr = "div#" + element;
	CurrentNav = "div#" + elementstr;
	$("div#feed").find(elementstr).html(Cache[cachedata]);
	var carqu = $(object).offset();
	$("div#feed").find(elementstr).offset({top:carqu.top + 22, left:carqu.left});
	$("div#feed").find(elementstr).mouseout(
		function()
		{
			$("div#feed").find(elementstr).animate(
			{
				"height":"0px",
				"overflow":"hidden",
				"z-index":"4",
				"display":"none"
			},
			200
			);
			$("div#feed").find(elementstr).delay(300).css("display", "none");
		}
	);
	$("div#feed").find(elementstr).css("display", "block");
	$("div#feed").find(elementstr).css("background", "#7CCD7C");
	$("div#feed").find(elementstr).css("border", "2px solid #004F00");
	$("div#feed").find(elementstr).css("border-radius", "5px");
	$("div#feed").find(elementstr).css("-moz-border-radius", "5px");
	$("div#feed").find(elementstr).css("-webkit-border-radius", "5px");
	$("div#feed").find(elementstr).animate({"position": "absolute", "display":"block", "height":"100px", "width":"250px", "overflow":"auto", "z-index":"42", }, 500);
}
