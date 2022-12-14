let set = "";
let set1 = "";
function changeColor(finalColor) {
    document.getElementById("gradient").style.background = "linear-gradient(180deg, #ffffff, #ffffff, " + finalColor + ")";
    document.getElementById("gradient").style.backgroundSize = "100% 300%";
    document.getElementById("gradient").style.backgroundPosition = "0% 75%";
}
function revertColor(){
    document.getElementById("gradient").style.backgroundPosition = "0% 0%";
}
function change(name, finalColor) {
    if (set !== name){
        if (set !== ""){
            revertColor();
            setTimeout(function () {
                changeColor(finalColor);
                set = name;
            }, 1300);
        } else {
            changeColor(finalColor);
            set = name;
        }
    }
}
function changeText() {
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("result").style.animation = "slide-bottom 0.9s ease-in-out forwards";
    document.getElementById("result1").style.visibility = "visible";
    document.getElementById("result1").style.animation = "slide-bottom 0.9s ease-in-out forwards";
    document.getElementById("desc-text").scrollIntoView({behavior: "smooth"});


    setTimeout(function () {
        document.getElementById("result").style.animation = "none";
        document.getElementById("result1").style.animation = "none";
    }, 900);
}
function revertText() {
    document.getElementById("result1").style.animation = "slide-bottom 1.1s ease-in-out reverse";
    document.getElementById("result").style.animation = "slide-bottom 1.1s ease-in-out reverse";
    document.getElementById("heading-text").scrollIntoView({behavior: "smooth"});
    setTimeout(function () {
        document.getElementById("result").style.visibility = "hidden";
        document.getElementById("result1").style.visibility = "hidden";
        document.getElementById("result").style.animation = "none";
        document.getElementById("result1").style.animation = "none";
    }, 1000);
}
function changeDescription(name, text1, text2) {
    if (set1 !== name){
        if (set1 !== ""){
            revertText();
            setTimeout(function () {
                document.getElementById("result").innerHTML = text1;
                document.getElementById("result1").innerHTML = text2;
                changeText();
                set1 = name;
            }, 1300);
        } else {
            document.getElementById("result").innerHTML = text1;
            document.getElementById("result1").innerHTML = text2;
            changeText();
            set1 = name;
        }
    }
}
document.getElementById("swift").addEventListener("click", function () {
    change("swift", "#ff8300");
    let text1 = "<h2>Swift</h2>";
    let text2 = "<p id='desc-text'>Swift jest j??zykiem programowania og??lnego przeznaczenia, stworzonym przez firm?? Apple. Jego celem jest zast??pienie j??zyka Objective-C, kt??ry by?? u??ywany do pisania aplikacji na platform?? iOS. Swift jest j??zykiem wieloparadygmatowym, wspieraj??cym programowanie obiektowe, imperatywne i funkcyjne. Jego sk??adnia jest zbli??ona do j??zyka C, a jego semantyka jest zbli??ona do j??zyka Ruby. Swift jest j??zykiem statycznie typowanym, ale w przeciwie??stwie do wi??kszo??ci j??zyk??w statycznie typowanych, Swift nie wymaga podawania typ??w zmiennych i argument??w funkcji. Swift jest j??zykiem o wysokiej wydajno??ci, kt??ry jest kompilowany do kodu maszynowego. Swift jest j??zykiem otwartym, co oznacza, ??e jego kod ??r??d??owy jest dost??pny dla wszystkich i mo??na go modyfikowa??. Swift jest j??zykiem wieloplatformowym, co oznacza, ??e mo??na go u??ywa?? na systemach operacyjnych macOS, iOS, watchOS, tvOS oraz Linux.</p>";
    changeDescription("swift",text1, text2);
});
document.getElementById("dart").addEventListener("click", function () {
    change("dart", "#00b4ab");
    let text1 = "<h2>Dart</h2>";
    let text2 = "<p id='desc-text'>Dart to obiektowy j??zyk programowania og??lnego przeznaczenia, implementowany m.in. we frameworku Flutter. Zosta?? stworzony przez firm?? Google i udost??pniony w 2011 roku. W sierpniu 2018 roku wydano Dart 2.0 ze zmianami j??zykowymi. Skupiono si?? r??wnie?? na rozwoju wsparcia dla framework??w dla aplikacji internetowych i mobilnych oraz udost??pnianiu niekt??rych narz??dzi i komponent??w, kt??re obs??uguj?? korzystanie z Darta. Google udost??pnia przegl??dark?? Dartium pozwalaj??c?? programistom na bezpo??rednie u??ycie j??zyka w przegl??darce celem przyspieszenia rozwoju aplikacji. Przegl??darka ta nie jest jednak przeznaczona dla u??ytkownika ko??cowego i konieczna jest kompilacja kodu Dart do JavaScriptu.</p>";
    changeDescription("dart", text1, text2);
});
document.getElementById("golang").addEventListener("click", function () {
    change("golang", "#00acd7");
    let text1 = "<h2>Go</h2>";
    let text2 = "<p id='desc-text'>Go (cz??sto nazywany tak??e golang) to wieloparadygmatowy j??zyk programowania opracowany przez pracownik??w firmy Google: Roberta Griesemera, Roba Pike???a oraz Kena Thompsona. ????czy w sobie ??atwo???? pisania aplikacji charakterystyczn?? dla j??zyk??w dynamicznych (np. Python, Lisp), jak r??wnie?? wydajno???? j??zyk??w kompilowanych (np. C, C++). Dost??pny jest kompilator na platform?? x86, x64 i ARM o nazwie go. Zosta?? r??wnie?? stworzony kompilator na bazie GNU Compiler Collection ??? gccgo.</p>";
    changeDescription("golang", text1, text2);
});
document.getElementById("rust").addEventListener("click", function () {
    change("rust", "#d26825");
    let text1 = "<h2>Rust</h2>";
    let text2 = "<p id='desc-text'>Rust to kompilowany j??zyk programowania og??lnego przeznaczenia rozwijany przez Fundacj?? Mozilla. Stworzony z my??l?? o ???bezpiecze??stwie, wsp????bie??no??ci i praktyczno??ci???. Zosta?? zaprojektowany przez Graydon Hoare w 2006 roku, w 2009 projekt zosta?? przyj??ty pod skrzyd??a Mozilla Foundation. W 2011 roku kompilator j??zyka, znany jako rustc, zosta?? z powodzeniem skompilowany przez samego siebie.</p>";
    changeDescription("rust", text1, text2);
});
document.getElementById("kotlin").addEventListener("click", function () {
    change("kotlin", "#7f52ff");
    let text1 = "<h2>Kotlin</h2>";
    let text2 = "<p id='desc-text'>Kotlin to statycznie typowany j??zyk programowania dzia??aj??cy na maszynie wirtualnej Javy, kt??ry jest g????wnie rozwijany przez programist??w JetBrains. Nazwa j??zyka pochodzi od wyspy Kotlin niedaleko Petersburga. Kotlin jest zaprojektowany z my??l?? o pe??nej interoperacyjno??ci z j??zykami dzia??aj??cymi na maszynie wirtualnej Javy. </p>";
    changeDescription("kotlin", text1, text2);
});
document.getElementById("python").addEventListener("click", function () {
    change("python", "#2b76b7");
    let text1 = "<h2>Python</h2>";
    let text2 = "<p id='desc-text'>Python to j??zyk programowania wysokiego poziomu og??lnego przeznaczenia, o rozbudowanym pakiecie bibliotek standardowych, kt??rego ide?? przewodni?? jest czytelno???? i klarowno???? kodu ??r??d??owego. Jego sk??adnia cechuje si?? przejrzysto??ci?? i zwi??z??o??ci??. Python wspiera r????ne paradygmaty programowania: obiektowy, imperatywny oraz w mniejszym stopniu funkcyjny. Posiada w pe??ni dynamiczny system typ??w i automatyczne zarz??dzanie pami??ci??, b??d??c w tym podobnym do j??zyk??w Perl, Ruby, Scheme czy Tcl. Podobnie jak inne j??zyki dynamiczne jest cz??sto u??ywany jako j??zyk skryptowy. Interpretery Pythona s?? dost??pne na wiele system??w operacyjnych. Python rozwijany jest jako projekt Open Source zarz??dzany przez Python Software Foundation, kt??ra jest organizacj?? non-profit. Standardow?? implementacj?? j??zyka jest CPython (napisany w C), ale istniej?? te?? inne, np. Jython (napisany w Javie), CLPython napisany w Common Lisp, IronPython (na platform?? .NET) i PyPy (na platform?? bootstrap). </p>";
    changeDescription("python", text1, text2);
});
document.getElementById("php").addEventListener("click", function () {
    change("php", "#7f8bc7");
    let text1 = "<h2>PHP</h2>";
    let text2 = "<p id='desc-text'>PHP to interpretowany, skryptowy j??zyk programowania zaprojektowany do generowania stron internetowych i budowania aplikacji webowych w czasie rzeczywistym. PHP jest najcz????ciej stosowany do tworzenia skrypt??w po stronie serwera WWW, ale mo??e by?? on r??wnie?? u??ywany do przetwarzania danych z poziomu wiersza polece??, a nawet do pisania program??w pracuj??cych w trybie graficznym. Implementacja PHP wraz z serwerem WWW Apache oraz serwerem baz danych MySQL okre??lana jest jako platforma AMP (w ??rodowisku Linux ??? LAMP, w Windows ??? WAMP). </p>";
    changeDescription("php", text1, text2);
});
document.getElementById("cpp").addEventListener("click", function () {
    change("cpp", "#408ee7");
    let text1 = "<h2>C++</h2>";
    let text2 = "<p id='desc-text'>C++ to j??zyk programowania og??lnego przeznaczenia. J??zyk zosta?? zaprojektowany przez Bjarne Stroustrupa jako rozszerzenie j??zyka C o obiektowe mechanizmy abstrakcji danych i siln?? statyczn?? kontrol?? typ??w. Zachowanie zgodno??ci z j??zykiem C na poziomie kodu ??r??d??owego pozostaje jednym z podstawowych cel??w projektowych kolejnych standard??w j??zyka. Umo??liwia abstrakcj?? danych oraz stosowanie kilku paradygmat??w programowania: proceduralnego, obiektowego i generycznego, a tak??e funkcyjnego i modularnego. Charakteryzuje si?? wysok?? wydajno??ci?? kodu wynikowego, bezpo??rednim dost??pem do zasob??w sprz??towych i funkcji systemowych, ??atwo??ci?? tworzenia i korzystania z bibliotek (napisanych w C++, C lub innych j??zykach), niezale??no??ci?? od konkretnej platformy sprz??towej lub systemowej (co gwarantuje wysok?? przeno??no???? kod??w ??r??d??owych) oraz niewielkim ??rodowiskiem uruchomieniowym. Podstawowym obszarem jego zastosowa?? s?? aplikacje i systemy operacyjne. </p>";
    changeDescription("cpp", text1, text2);
});
document.getElementById("java").addEventListener("click", function () {
    change("java", "#f33f17");
    let text1 = "<h2>Java</h2>";
    let text2 = "<p id='desc-text'>Java to wsp????bie??ny, oparty na klasach, obiektowy j??zyk programowania og??lnego zastosowania. Zosta?? stworzony przez grup?? robocz?? pod kierunkiem Jamesa Goslinga z firmy Sun Microsystems. Java jest j??zykiem tworzenia program??w ??r??d??owych kompilowanych do kodu bajtowego, czyli postaci wykonywanej przez maszyn?? wirtualn??. J??zyk cechuje si?? silnym typowaniem. Jego podstawowe koncepcje zosta??y przej??te z j??zyka Smalltalk (maszyna wirtualna, zarz??dzanie pami??ci??) oraz z j??zyka C++ (du??a cz?????? sk??adni i s????w kluczowych). </p>";
    changeDescription("java", text1, text2);
});
document.getElementById("javascript").addEventListener("click", function () {
    change("javascript", "#f7df1e");
    let text1 = "<h2>JavaScript</h2>";
    let text2 = "<p id='desc-text'>JavaScript to skryptowy oraz wieloparadygmatowy j??zyk programowania, stworzony przez firm?? Netscape, najcz????ciej stosowany na stronach internetowych. Tw??rc?? JavaScriptu jest Brendan Eich. W po??owie lat 90. XX wieku organizacja ECMA wyda??a na podstawie JavaScriptu standard j??zyka skryptowego o nazwie ECMAScript, aktualnie rozwijaniem tego standardu zajmuje si?? komisja TC39</p>";
    changeDescription("javascript", text1, text2);
});