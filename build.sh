#!/bin/bash
# Vercel Build Script for Rust/Rocket Application

set -e

echo "Installing Rust toolchain..."
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
source $HOME/.cargo/env

echo "Rust version:"
cargo --version

echo "Building pointercrate-example..."
cargo build --release --package pointercrate-example

echo "Build completed successfully!"

