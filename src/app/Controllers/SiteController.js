
class SiteController {
    
    search(req, res) {
        res.render('search');
    }
    
    news(req, res) {
        res.render('news');
    }
    
    index(req, res) {
        res.render('home');
    }
}

module.exports = new SiteController;
