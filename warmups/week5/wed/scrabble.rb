

# def scrabble_score word

#     scores = {
#         'a' => 1, 'e' => 1, 'i' => 1, 'o' => 1,
#         'u' => 1, 'l' => 1, 'n' => 1, 'r' => 1,
#         's' => 1, 't' => 1, 'd' => 2, 'g' => 2,
#         'b' => 3, 'c' => 3, 'm' => 3, 'p' => 3,
#         'f' => 4, 'h' => 4, 'v' => 4, 'w' => 4,
#         'y' => 4, 'k' => 5, 'j' => 8, 'x' => 8,
#         'q' => 10, 'z' => 10
#     } 

#     total_score = 0

#     word.split("").each do |letter| # can also you word.chars
#         total_score += scores[letter]
#     end

#     puts total_score

# end

# scrabble_score "cabbage" #14


class Scrabble 

    def initalize
        @score = 0
    end

    def get_score(word)

        letter_score = {
            'a' => 1, 'e' => 1, 'i' => 1, 'o' => 1,
            'u' => 1, 'l' => 1, 'n' => 1, 'r' => 1,
            's' => 1, 't' => 1, 'd' => 2, 'g' => 2,
            'b' => 3, 'c' => 3, 'm' => 3, 'p' => 3,
            'f' => 4, 'h' => 4, 'v' => 4, 'w' => 4,
            'y' => 4, 'k' => 5, 'j' => 8, 'x' => 8,
            'q' => 10, 'z' => 10
        } 

        # neater data structure but will require a nested loop -> not as efficient
        # letter_score_2 = {
        #     1 => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
        #     2 => ["D", "G"],
        #     3 => ["B", "C", "M", "P"],
        #     4 => ["F", "H", "V", "M","Y"],
        #     5 => ["K"],
        #     8 => ["J", "X"],
        #     10 => ["Q", "Z"],
        # }

        total_score = 0

        word.split("").each do |letter| # can also you word.chars <-- both methods turns the word into an array to allow for looping
            total_score += letter_score[letter]
        end

        @score = total_score

    end


end

game = Scrabble.new
puts game.get_score "cabbage"