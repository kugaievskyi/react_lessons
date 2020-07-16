var Header = () => {
    return (
        <div className="header">
            <p className="header-line">Home Work #1<br></br> Components</p>
            <p className="header-line-by">by Kugaievskyi</p>
        </div>

    );
}

var FirstTask = () => {
    return (
        <div>
            <div className="flex-pos">
                <div className="img-book" >
                    <img src="img/book.jpg" className="img-shadow" />
                </div>
                <div className="main-book">
                    <p className="title-book">Under the Done</p>
                    <p className="title-book title-book-by">by Stephen King</p>
                    <p className="book-info">Genre: Sci-Fi<br></br>Pages: 1074<br></br>Publisher: Scribner<br></br>Publication: November 10, 2009</p>
                </div>
            </div>
            <div className="book-review-div">
                <p className="book-reviews">Under the Dome opens with a signature Stephen King moment: a woodchuck, foraging for food, hides from a passing human—and is chopped in half as an impenetrable dome appears around the city limits. At the same instant, a plane crashes into the dome above him. “The Seneca exploded over Route 119 and rained fire on the countryside. . . . A smoking forearm . . . landed with a thump beside the neatly divided woodchuck.” In seconds Chester’s Mill has transformed from your typical small town to a closed-off stage where the worst and best of human nature will be displayed.</p>
                <p className="book-reviews">The worst comes in the form of Big Jim Rennie, a politician who takes advantage of the police chief’s demise to consolidate power and deputize a motley crew of thugs—including his disturbed son—to police the town. Throw in an unbalanced meth addict and some seriously stale air (the dome is impermeable not only by weapons, but also by clean air), and Chester’s Mill is well on its way to becoming a chaotic police state. An Iraq war vet, a newspaper publisher, a physician’s assistant and a couple of spunky teens (among the novel’s most engaging characters) try to foil Big Jim’s plans while the world watches—at least, at first. Though their situation draws TV crews from around the world, once the novelty fades, other news stories take top billing despite the residents’ increasingly desperate state, recalling tragedies like Hurricane Katrina.</p>
            </div>
        </div>
    )
}

var BookReview = () => {
    return (
        <div className="book-review-div">
            <p className="book-review-title">Review</p>
            <p className="book-reviews">Under the Dome opens with a signature Stephen King moment: a woodchuck, foraging for food, hides from a passing human—and is chopped in half as an impenetrable dome appears around the city limits. At the same instant, a plane crashes into the dome above him. “The Seneca exploded over Route 119 and rained fire on the countryside. . . . A smoking forearm . . . landed with a thump beside the neatly divided woodchuck.” In seconds Chester’s Mill has transformed from your typical small town to a closed-off stage where the worst and best of human nature will be displayed.</p>
            <p className="book-reviews">The worst comes in the form of Big Jim Rennie, a politician who takes advantage of the police chief’s demise to consolidate power and deputize a motley crew of thugs—including his disturbed son—to police the town. Throw in an unbalanced meth addict and some seriously stale air (the dome is impermeable not only by weapons, but also by clean air), and Chester’s Mill is well on its way to becoming a chaotic police state. An Iraq war vet, a newspaper publisher, a physician’s assistant and a couple of spunky teens (among the novel’s most engaging characters) try to foil Big Jim’s plans while the world watches—at least, at first. Though their situation draws TV crews from around the world, once the novelty fades, other news stories take top billing despite the residents’ increasingly desperate state, recalling tragedies like Hurricane Katrina.</p>
        </div>
    )
}

ReactDOM.render(
    <Header />,
    document.getElementById("header")
)

ReactDOM.render(
    <FirstTask />,
    document.getElementById("firstTask")
)

ReactDOM.render(
    <BookReview />,
    document.getElementById("book-review")
)