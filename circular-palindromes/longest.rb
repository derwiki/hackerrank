
def longest_palindrome(s)
  len = s.length
  len.downto(2).each do |curlen|
    puts "        #{s}"
    puts "curlen: #{curlen}"
    0.upto(len - curlen).each do |offset|
       print offset, ' ', s[offset], "\n"
       print offset + curlen, ' ', s[offset + curlen - 1], "\n"
    end
    puts
  end
end

def palindrome?(s)
  if s.length <= 1 # single and empty strings are palindromes
    return true
  elsif s[0] == s[-1]
    return palindrome?(s[1 .. -2])
  else
    return false
  end
end


# r a c e c a r
def palindrome?(s, slength = nil, offset = nil)
  slength ||= s.length
  offset ||= (offset || 0)

  first = s[offset]
  second_index = slength - offset - 1
  second = s[second_index]
  puts [offset, first, second_index, second].join(' ')

  if second_index - offset <= 1
    return true
  elsif first == second
    return palindrome?(s, slength, offset+1)
  else
    return false
  end
end

#puts longest_palindrome("eededdeedede")
 puts "eededdeedede", palindrome?("eededdeedede")
 puts "racecar", palindrome?("racecar")
 puts palindrome?("deed")
