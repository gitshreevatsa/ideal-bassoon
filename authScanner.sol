// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AddressRegistry {
    mapping(bytes16 => bool) private authorizedAddresses;

    event AddressAdded(bytes16 indexed addr);

    // Function to check if an address is authorized
    function isAddressAuthorized(bytes16 _address) public view returns (bool) {
        return authorizedAddresses[_address];
    }

    // Function to add an address to the authorized list
    function addAddress(bytes16 _newAddress) public {
        require(!authorizedAddresses[_newAddress], "Address already authorized");

        authorizedAddresses[_newAddress] = true;
        emit AddressAdded(_newAddress);
    }
}
