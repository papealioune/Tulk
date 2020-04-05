pragma solidity >=0.5.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract DaiSwap {
  string public name = "DaiSwap Instant Exchange";
  ERC20 public token;
  uint public rate = 100;

  event DaiSold(
    address account,
    address token,
    uint amount,
    uint rate
  );

  constructor(ERC20 _token) public {
    token = _token;
  }

  function sellTokens(uint _amount) public {
    // Verify if the seller has enough funds
    require(token.balanceOf(msg.sender) >= _amount);

    // Calculate the amount of Dai to redeem
    uint daiAmount = _amount / rate;

    // Require that EthSwap has enough Dai
    require(address(this).balance >= daiAmount);

    // Perform sale
    token.transferFrom(msg.sender, address(this), _amount);
    msg.sender.transfer(daiAmount);

    // Emit an event
    emit DaiSold(msg.sender, address(token), _amount, rate);
  }
}