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
          # The `serve` npm package has some a few high vulnerabilities, so if
          # we include it as a dev dependency in the package.json and execute
          # the command `npm audit` (e.g. on the CI), it fails. To avoid this
          # issue, we can declare the `serve` package here.
          nodePackages.serve
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
