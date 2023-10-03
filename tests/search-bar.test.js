import Navbar from "../page-objects/components/Navbar";
import SearchResultsPage from "../page-objects/pages/SearchResultsPage";

const navbar = new Navbar()
const searchbar = new SearchResultsPage()

// prettier-ignore
fixture `Search bar`
    .page `http://zero.webappsecurity.com/index.html`

test("Search item on search bar", async t => {
    navbar.search('online bank')
    await t
        .expect(navbar.searchInput.exists).ok()
        .expect(searchbar.text.innerText).contains('Search Results:')
        .expect(searchbar.link.innerText).contains('Zero - Free Access to Online Banking')
})