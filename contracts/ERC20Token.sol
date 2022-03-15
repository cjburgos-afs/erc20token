// SPDX-License-Identifier: MIT
pragma solidity =0.8.12;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title ERC20
 * @dev ERC20 minting logic
 */
contract ERC20Token is ERC20 {
    address public owner;

    constructor() ERC20("Workshop Token", "WSP") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "Only owner allowed to mint");
        _;
    }

    /**
     * @dev Function to mint tokens. Only owner allowed to mint.
     * @param value The amount of tokens to mint.
     * @return A boolean that indicates if the operation was successful.
     */
    function mint(uint256 value) public onlyOwner returns (bool) {
        _mint(_msgSender(), value);
        return true;
    }
}
