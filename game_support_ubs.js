function macro_add_game(macroSender) {
    addGame(macroSender.args[0], macroSender.args[1], macroSender.args[2]);
}

addMacro("add_game", macro_add_game);
