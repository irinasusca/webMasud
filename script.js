
    let cardsArray = [];

    const highlight = [
      { backgroundColor: "rgba(180, 48, 33, 0)", offset: 0 },        // Start: Transparent, normal scale
      { backgroundColor: "rgba(180, 48, 33, 0.8)", offset: 0.5 },  // Midpoint: Bright blue, slightly larger scale
      { backgroundColor: "rgba(180, 48, 33, 0)",  offset: 1 }         // End: Transparent again, back to normal scale
  ];

  const increaseSize = [
    { transform: "scale(1)", offset: 0 },        // Start: Transparent, normal scale
    { transform: "scale(1.1)", offset: 0.5 },  // Midpoint: Bright blue, slightly larger scale
    { transform: "scale(1)", offset: 1 }         // End: Transparent again, back to normal scale
];
  
  function highlightCard(card, duration) {
      const cardElement = getCard(card);
      const wholeCardElement = getWholeCard(card);
      // Animate with easing and smooth fade
      cardElement.animate(highlight, {
          duration: duration,
          easing: "ease-in-out" // Smooth start and end for a satisfying effect
      });

      wholeCardElement.animate(increaseSize, {
        duration: duration,
        easing: "ease-in-out" // Smooth start and end for a satisfying effect
    });
  }

    function displayInformation()
    {
      var information = document.getElementById("information");
      information.style.opacity = "1.0";
      information.style.pointerEvents = "all";
    }

    function hideInfomation()
    {
      var information = document.getElementById("information");
      information.style.opacity = "0";
      information.style.pointerEvents = "none";
    }

    function selectCard(number, select) {
      var cardElement = getWholeCard(number);

      
        if(cardLine(number)==1 || cardLine(number) == 3)
        {
          if(select)
          {
            cardElement.style.transform = "translateY(20px)";
            cardElement.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
          }
            
          else
          {
            cardElement.style.transform = "translateY(0px)";
            cardElement.style.boxShadow = "inherit";

          }
        }
        else if(cardLine(number)==2)
        {
          if(select)
          {
            cardElement.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
            cardElement.style.transform = "translateX(20px)";
          }
            
          else
          {
            cardElement.style.transform = "translateX(0px)";
            cardElement.style.boxShadow = "inherit";
          }
        }
        else if(cardLine(number)==4)
        {
            if(select)
            {
              cardElement.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
              cardElement.style.transform = "translateX(-20px)";
            }
            else
            {
              cardElement.style.transform = "translateX(0px)";
              cardElement.style.boxShadow = "inherit";
            }
                
        }
      
    }

    function stopButtons()
    {
      var buttons = document.getElementById("btns");
      buttons.children[0].style.pointerEvents = "none";
      buttons.children[1].style.pointerEvents = "none";
    }

    function startButtons()
    {
      var buttons = document.getElementById("btns");
      buttons.children[0].style.pointerEvents = "";
      buttons.children[1].style.pointerEvents = "";
    }
    
    function askStart()
    {
      var elements1 = document.getElementById("line1");
      var elements2 = document.getElementById("line2");
      var elements3 = document.getElementById("line3");
      var elements4 = document.getElementById("line4");
      var elements = [elements2, elements3, elements4];
      for(var element of elements)
      {
        element.style.opacity = "0";
        element.style.display = "none";
      }
    
      stopButtons();

      const textElement = document.createElement("p");
      textElement.innerText = "Pick a card.";
      textElement.style.fontSize = "3em";
      textElement.style.color = "#ffffff";
      elements1.insertAdjacentElement("afterend", textElement);

      for (let card of elements1.children)
      {
        if (window.innerWidth > 600)
        {
          card.style.height = "14vh";
          textElement.style.transform = "translateY(18vh)";
        }
          
        else 
        {
          card.style.height = "9vh";
          textElement.style.transform = "translateY(13vh)";
        }
          
        card.style.transform = "translateY(150%)";
        
      }

     

    // Add a click event listener to the document
    function handleClick(event) {
      const clickedElement = event.target; // Get the clicked element

      // Check if the clicked element is indeed a line1 card
      if (!elements1.contains(clickedElement)) {
          return; // Ignore clicks outside line1
      }

      // Hide the "Pick a card" text
      textElement.style.display = "none";

      // Reset the styles of the line1 cards
      for (let card of elements1.children) {
          card.style.height = "";  // Reset height
          card.style.transform = ""; // Reset transform
      }

      // Show elements 2, 3, and 4
      for (var element of elements) {
          element.style.opacity = "1";
          element.style.display = "flex";
      }

      // Log the clicked element
      console.log("Clicked element:", clickedElement);

      // Remove the event listener after the first valid click
      elements1.removeEventListener("click", handleClick);

      
      // Store the clicked card element for other functions to access
      lastClickedElement = clickedElement;
      
      test();
  }

  // Add click event listener to line1 only
    
      elements1.addEventListener("click", handleClick);
      
    }
    
    function test() {
      
      
      var elements1 = document.getElementById("line1").children;
  
      let index =0;
      for(let i = 1; i<=6; i++) {
        let card = getCard(i);
        if(card == lastClickedElement )
          index = i;
      }

      console.log(index);
    
      
      play(cardsArray, index);
      
    }

    async function play(cards, start)
    {
      stopButtons();
      let duration;
      let i=start;
      do
      { 
        let l = i;
        let r = i+cards[i];
        console.log("i = ", i, " cards[i] = ", cards[i]);
        if(l>24) l-=24;
        if(r>24) r-=24;

        if(l>r)
        {
            selectCard(l, 1);
            getCard(l).style.backgroundColor = "rgba(180, 48, 33, 0.8)";
          animateOneByOne(l+1, 24);
          duration = (24-l) * 500;
          await new Promise(resolve => setTimeout(resolve, duration))
          animateOneByOne(1, r);
          duration = (r+1) * 500;
          await new Promise(resolve => setTimeout(resolve, duration))

           
           
          animateSimultaneously(l+1, 24);
          animateSimultaneously(1, r);
          await new Promise(resolve => setTimeout(resolve, 1000))
          selectCard(l, 0);
          getCard(l).style.backgroundColor = "";
        }
        else 
        {
            getCard(l).style.backgroundColor = "rgba(180, 48, 33, 0.8)";
            selectCard(l, 1);
          animateOneByOne(l+1, r);
          let duration = (cards[i]+1) * 500;
        ///pentru fiecare pas asteptam ca sa nu ruleze deodata animatiile.
          
          await new Promise(resolve => setTimeout(resolve, duration))
           
          
          animateSimultaneously(l+1, r);
          await new Promise(resolve => setTimeout(resolve, 1000))
          selectCard(l, 0);
          getCard(l).style.backgroundColor = "";
          
        }
        
        if(cards[i])
          i=i+cards[i];
        else break;

      } while( i<30 )

        
        startButtons();
        console.log(i);
        getCard(i-24).style.color = "rgba(180, 48, 33)";
      ///incepem din pct de start, la care adaugam valoarea din i
      ///continuam de acolo la fel pana cand i se intoarce la val. initiala
      // daca e mai mare de 24 in intoarcem in bounds
    }
    
    function fillCards()
    {
      ///in loc sa umple pe card trebuie sa umple pe copilul card-front.
      var frequencies = [0, 0, 0, 0, 0, 0, 0];
      for(let i =1; i<=24; i++)
      {
        
        do
        {
          var randCard = getRandomCard();
        }
        while(frequencies[randCard]>=4)
      
        frequencies[randCard] ++;
        cardsArray[i] = randCard;
        
        
        if(cardsArray[i] == 1)
        {
          getCard(i).innerText = 'A';
          getCard(i).setAttribute("data-number",'A');
        }
          
        else
        {
          getCard(i).innerText = cardsArray[i];
          getCard(i).setAttribute("data-number", cardsArray[i]);
        } 
        getCard(i).style.color = "";
      }
    }
    //un array de 24 de carti
    //de la 1 la 6 partea de sus, de la 7 la 12 col2, de la 13 la 18 
    //row2 in ordie inversa si de la 19 la 24 col1 in ordine inversa.

    ///functie care gaseste care card reprezinta nr de la 1 la 24;
    ///gaseste row/ column in care apartine (de la 1 la 4, 1 = row de sus, sens ceas)
    function cardLine(x)
    {
      
      if(1<=x&& x<=6) return 1;
      if(7<=x&& x<=12) return 2;
      if(13<=x && x<=18) return 3;
      if(19<=x && x<=24) return 4;
    }
    ///gaseste Nth child de pe linia gasita care trebuie schimbat
    function nthCard(x)
    {
      
      ///daca e pe primul/ al doilea rand, ordinea ramane aceeast pt elemente
      ///al catelea element de pe linie = restul la 6.
      ///in cazul in care e ultimul element de pe rand, r=0 return 6.
      if(cardLine(x)==1 || cardLine(x)==2) 
      {
        if(x%6==0) return 6;
        else return x%6;
      }

      ///in celalalte cazuri, e inversata ordinea, deci 7 - restul la 6.
      ///aici, daca restul e 0, intoarcem 1 pentru primul element.
      if(cardLine(x)==3 || cardLine(x)==4) 
      {
        if(x%6==0) return 1;
        else return 7-x%6;
      }
    }

    function getWholeCard(number) {
      var line = cardLine(number);
      var card = nthCard(number);

      var elements1 = document.getElementById("line1").children;
      var elements2 = document.getElementById("line2").children;
      var elements3 = document.getElementById("line3").children;
      var elements4 = document.getElementById("line4").children;

      var cardElement;

      if(line==1)
        cardElement = elements1[card-1];

      if(line==2)
        cardElement = elements2[card-1];

      if(line==3)
        cardElement = elements3[card-1];

      if(line==4)
        cardElement = elements4[card-1];

      return cardElement;
    }

    function getCard(number)
    {

      var cardElement = getWholeCard(number).children[0];
      
      return cardElement;

    }

     
   

    function getRandomCard() {
      return Math.floor(Math.random() * 6 + 1);
    }

    async function shuffle()
    {

      
      let duration = 800;
      var cards = document.querySelectorAll('.card');
  
      for (let card of cards) {
      card.style.transform = 'rotateY(180deg)';
       }
       await new Promise(resolve => setTimeout(resolve, duration));
       fillCards();

       for (let card of cards) {
        card.style.transform = 'rotateY(0deg)';
       }
       

    }
    //functie care coloreaza cartile de la x la y. 
    async function animateCards(x, y)
    {

      animateOneByOne(x,y);
      animateSimultaneously(x,y);
      
    }

    async function animateOneByOne(x, y)
    {

      var card;
      for(let i = x; i<=y; i++)
      {
        card = getCard(i);
        await new Promise(resolve => setTimeout(resolve, 500))
        highlightCard(i, 500);
          
      }

    }

    function animateSimultaneously(x, y)
    {
      var card;

      for(let i = x; i<=y; i++)
      {
        card = getCard(i);
        highlightCard(i, 1000);
        
          
      }

    }
