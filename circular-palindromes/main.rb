# try longest ones first since we're interested in short circuiting with longest
def longest_palindrome(s)
  puts s
  (s.length).downto(2).each do |len|
    i = 0
    while i <= (s.length - len) do
      slice = s.slice(i, len)
      return len if slice == slice.reverse
      i += 1
    end
  end
  return 0
end

puts longest_palindrome("aaaaabbbbaaaa")
puts longest_palindrome("eededdeedede")
