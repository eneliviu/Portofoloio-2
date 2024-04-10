

let mainDoc = document.getElementsByTagName('main')[0];

newSection = document.createElement('section');
newSection.innerHTML = "<h2> Not empty </h2>"
newSection.style.width = "300px";
newSection.style.backgroundColor = "yellow";
mainDoc.appendChild(newSection);


<section id="additional-content" aria-label="General facts about cats">
<h2 class="hidden-heading">Reasons for loving cats</h2>
<article>
  <div class="reason">
    <h3> Stress Relief <i class="fa-solid fa-heart"></i></h3>
    <hr>

    <ul>
      <li>
        Cats bring joy with their playful antics.
      </li>
      <li>
        Whether chasing laser pointers or exploring boxes, they provide
        entertainment and can reduce stress.
      </li>
      <li>
        The calming effect of a purring cat is known to promote relaxation.
      </li>
    </ul>


  </div>
</article>

<article>
  <div class="reason">
    <h3> Low Maintenance <i class="fa-solid fa-heart"></i>
    </h3>
    <hr>
    <ul>
      <li>Cats are easy to care for.</li>
      <li>Cats appreciate their independence, but they also enjoy spending quality time with their owners. </li>
      <li>They are ideal for people with busy lives who still want the joy of having a pet.</li>
    </ul>
  </div>
</article>

<article>
  <div class="reason">
    <h3>
      Companionship
      <i class="fa-solid fa-heart"></i>
    </h3>
    <hr>
    <ul>
      <li>Contrary to the common misconception, cats are incredibly affectionate.</li>
      <li>They express affection through purring, snuggling, and headbutts.</li>
      <li>Cats are known for their ability to adapt to various living environments.</li>
    </ul>
  </div>
</article>

<article>
  <div class="reason">
    <h3> Cleanliness <i class="fa-solid fa-heart"></i>
    </h3>
    <hr>
    <ul>
      <li>Cats are meticulous groomers, and they often keep themselves clean.</li>
      <li>They groom themselves, use a litter box, and are independent.</li>
      <li>This trait contributes to a generally tidy living environment for cat owners.</li>
    </ul>
  </div>
</article>

</section>