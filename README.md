# 📍 Location Proofs

Many location-based applications require users to provide their position as an input. Ride-sharing, delivery services, mapping / navigation apps, even video streaming services all need to know where a user is. 

Astral's Location Proof Protocol serve to create a standardized format for users to attest to their position within some spatial reference system. 

The standard will include a framework for building "recipes" that allow for many different types of location proofs to be added. Our goal is to create a flexible standard where users are subjected to the appropriate degree of rigor, based on the use case — a mobile gaming app might require much lower security than a supply chain tracking platform. We foresee location proof recipes that use social, hardware, and perhaps even economic means for increasing the probability that a location proof is true.

Of course, where someone exists can be a very private piece of information. We are collaborating with [zkMaps](https://github.com/zkMaps/zkMaps) to develop zero-knowledge location claims, and making sure these privacy-preserving location proofs are compatible with our Location Proof Protocol. 

Location proofs are designed to be natively compatible with Astral's [spatial registries](https://github.com/AstralProtocol/verifiable-spatial-data-registries).

More soon ...
