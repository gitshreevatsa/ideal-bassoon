// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AddressRegistry {
    mapping(address => bool) private authorizedAddresses;

    event AddressAdded(address indexed addr);

    // Function to check if an address is authorized
    function isAddressAuthorized(address _address) public view returns (bool) {
        return authorizedAddresses[_address];
    }

    // Function to add an address to the authorized list
    function addAddress(address _newAddress) public {
        require(!authorizedAddresses[_newAddress], "Address already authorized");

        authorizedAddresses[_newAddress] = true;
        emit AddressAdded(_newAddress);
    }
}
