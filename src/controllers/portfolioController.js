const portfolioRepository = require("../repositories/portfolioRepository");

exports.getPortfolio = async (req, res) => {
    const portfolio = await portfolioRepository.getPortfolio();
    res.json(portfolio);
}

exports.getPortfolioById = async (req, res) => {
    const id = parseInt(req.params.id);
    const portfolio = await portfolioRepository.getPortfolioById(id);
    res.json(portfolio);
}

exports.createPortfolio = async (req, res) => {
    const portfolio = req.body;
    const newPortfolio = await portfolioRepository.createPortfolio(portfolio);
    res.json(newPortfolio);
}

exports.updatePortfolio = async (req, res) => { 
    const id = parseInt(req.params.id);
    const portfolio = req.body;
    const updatedPortfolio = await portfolioRepository.updatePortfolio(id, portfolio);
    res.json(updatedPortfolio);
}

exports.deletePotfolio= async (req, res) => {
    const id = parseInt(req.params.id);
   const result = await  portfolioRepository.deletePortfolio(id);
    res.json({ message: `Portfolio ${id} deleted` });
}