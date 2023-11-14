# 📍 Verifiable Location Credentials

Many location-based applications require users to provide their position as an input. Ride-sharing, delivery services, mapping / navigation apps, even video streaming services all need to know where a user is. 

Verifiable location credentials serve to create a standardized format for users to attest to their position within some spatial reference system. 

The standard will include a framework for building extensions that allow additional evidence that supports the presence claim to be attached. Our goal is to create a flexible standard where users are subjected to the appropriate degree of rigor, based on the use case — a mobile gaming app might require much lower security than a supply chain tracking platform. 

Of course, where someone exists can be a very private piece of information. We are collaborating with [zkMaps](https://github.com/zkMaps/zkMaps) to develop zero-knowledge location claims, and making sure these privacy-preserving location proofs are compatible with our verifiable location credentials specification. 

Verifiable location credentials are designed to be natively compatible with Astral's [verifiable spatial data registries](https://github.com/AstralProtocol/verifiable-spatial-data-registries).

Read more of our thinking behind verifiable location credentials in our [docs](https://docs.astral.global/archive/universal-location-proofs), and reach out on [Twitter](https://twitter.com/astralprotocol) if you want to contribute or learn more.