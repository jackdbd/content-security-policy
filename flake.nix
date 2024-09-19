{
  description = "Write your Content-Security-Policy header in JavaScript, so you can have validation and automatic hashes";

  inputs = {
    alejandra = {
      url = "github:kamadorueda/alejandra/3.0.0";
    };
    # nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/0.1.*.tar.gz";
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
        nodejs = prev.nodejs_22;
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
        packages = with pkgs; [
          neo-cowsay
          nodejs
        ];

        shellHook = ''
          cowthink "Welcome to this nix dev shell!" --bold -f tux --rainbow
          echo "Versions:"
          echo "- Node.js $(node --version)"
          echo "- npm $(npm --version)"

          # export FOO=bar;
        '';
        DEBUG = "csp:*,-csp:utils";
        # NODE_ENV = "development";
      };
    });
  };
}
