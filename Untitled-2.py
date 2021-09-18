#Carter Askelson
#CSE 210 Programming with Classes
#Tic Tac Toe Assignment

g1 = "1"
g2 = "2"
g3 = "3" 
g4 = "4"
g5 = "5"
g6 = "6"
g7 = "7"
g8 = "8"
g9 = "9" 

x = "X"
o = "O"

new_turn = x

turn_counter = 0

def startgame():
    print("Let's play a game of Tic Tac Toe!")
    print()
    print_board()
    print()
    player_move(new_turn)

def print_board():
    print(f"{g1}|{g2}|{g3}")
    print("-+-+-")
    print(f"{g4}|{g5}|{g6}")
    print("-+-+-")
    print(f"{g7}|{g8}|{g9}")

def player_move(turn):
    global turn_counter
    turn_counter += 1
    global new_turn
    if turn == x:
        new_grid_spot = int(input("x's turn to choose a square (1-9): "))
        new_turn = o
    else:
        new_grid_spot = int(input("o's turn to choose a square (1-9): "))
        new_turn = x
    change_grid(new_grid_spot, turn)

def change_grid(grid_location, turn):
    global g1
    global g2
    global g3
    global g4
    global g5
    global g6
    global g7
    global g8
    global g9
    if grid_location == 1:
        g1 = turn
    elif grid_location == 2:
        g2 = turn
    elif grid_location == 3:
        g3 = turn
    elif grid_location == 4:
        g4 = turn
    elif grid_location == 5:
        g5 = turn
    elif grid_location == 6:
        g6 = turn
    elif grid_location == 7:
        g7 = turn
    elif grid_location == 8:
        g8 = turn
    elif grid_location == 9:
        g9 = turn
    else:
        print("error")
    print()
    print_board()
    print()
    check_if_win()
    
def check_if_win():
    global g1
    global g2
    global g3
    global g4
    global g5
    global g6
    global g7
    global g8
    global g9
    global turn_counter
    if (g1 and g2 and g3 == x) or (g4 and g5 and g6 == x) or (g7 and g8 and g9 == x) or (g1 and g4 and g7 == x) or (g2 and g5 and g8 == x) or (g3 and g6 and g9 == x) or (g1 and g5 and g9 == x) or (g3 and g5 and g7 == x):
        print("x's win!")
    elif (g1 and g2 and g3 == o) or (g4 and g5 and g6 == o) or (g7 and g8 and g9 == o) or (g1 and g4 and g7 == o) or (g2 and g5 and g8 == o) or (g3 and g6 and g9 == o) or (g1 and g5 and g9 == o) or (g3 and g5 and g7 == o):
        print("o's win!")
    elif turn_counter == 10:
        print("Draw!")
    else:
        player_move(new_turn)

    
        
startgame()