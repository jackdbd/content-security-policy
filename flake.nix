{
  description = "A Nix-flake-based Node.js development environment";

  inputs = {
    # https://github.com/NixOS/nixpkgs/branches
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable-small";
  };

  outputs = {
    nixpkgs,
    self,
    ...
  } @ inputs: let
    overlays = [
      (final: prev: {
        nodejs = prev.nodejs_21;
      })
    ];
    supportedSystems = ["x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin"];
    forEachSupportedSystem = f:
      nixpkgs.lib.genAttrs supportedSystems (system:
        f {
          pkgs = import nixpkgs {inherit overlays system;};
        });
  in {
    devShells = forEachSupportedSystem ({pkgs}: {
      default = pkgs.mkShell {
        packages = with pkgs; [nodejs];

        shellHook = ''
          echo "Nix dev shell"
          echo "- Node.js $(node --version)"
          echo "- npm $(npm --version)"
        '';

        DEBUG = "csp:*,-csp:utils";
        NODE_ENV = "development";
      };
    });
  };
}
