const ERC20Token = artifacts.require('ERC20Token'); 

contract('ERC20Token', (accounts) => {
    let erc20Token;

    const TOKEN_NAME = "Workshop Token";
    const TOKEN_SYMBOL = "WSP";
    const admin = accounts[0];

    beforeEach( async () => {
        erc20Token = await ERC20Token.new();
    });

    it('should have name and symbol as set', async () => {
        let name = await erc20Token.name();
        let symbol = await erc20Token.symbol();

        assert.equal(name,TOKEN_NAME);
        assert.equal(symbol, TOKEN_SYMBOL);
    });

    it('should have set the owner correctly', async () => {
        assert.equal(await erc20Token.owner(), admin);
    });

    it('should have decimals set as 18', async () => {
        assert.equal(await erc20Token.decimals(), 18);
    })

    it('only owner should mint token successfully', async () => {
        let mintAmount = 1;
        let balanceBefore = await erc20Token.balanceOf(admin);
        await erc20Token.mint(mintAmount);
        let balanceAfter = await erc20Token.balanceOf(admin);
        assert.equal((balanceAfter.toNumber() - balanceBefore.toNumber()), mintAmount);
    });

});
