function shout(string)
{
  return string.toUpperCase()
}

function whisper(string)
{
  return string.toLowerCase()
}

function logShout(string)
{
  console.log(string.toUpperCase())
}

function logWhisper(string)
{
  console.log(string.toLowerCase())
}

function sayHitoGrandma(string)
{
  var CantHear = "I can't hear you!"
  var CanHear = "YES INDEED!"
  var ILoveYou = "I love you, too."
  
  if (string.toLowerCase(string)) === string
  {
    return CantHear;
  }
  else if (string.toUpperCase(string)) === string
  { 
    return CanHear;
  }
  else if ("I love you, Grandma." === string)
  {
    return ILoveYou;
  }
}