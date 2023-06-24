const DATE_REGEX =
  /^(?:\d{4})-(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8]|29(?=-02-(?:1[6-9]|[2-9]\d)(?:0[48]|[2468][048]|[13579][26]))|30(?=(?:0[13-9]|1[0-2])-))|(?:(?:\d{2})(?:0[48]|[2468][048]|[13579][26])|(?:(?:[02468][048]|[13579][26])(?:0[48]|[2468][048]|[13579][26])))-(?:02-29)T([01]\d|2[0-3]):[0-5]\d$/;
// const TIME_REGEX = /^([01]\d|2[0-3]):[0-5]\d$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const MONTH_FORMAT_REGEX = /^20[2-9][\d]-(0[1-9]|[1][012])$/;

module.exports = {
  DATE_REGEX,
  // TIME_REGEX,
  EMAIL_REGEX,
  MONTH_FORMAT_REGEX,
};

/* 
# DATE_REGEX with comments 
/^                            # Start of the string
(?:\d{4})                    # Match a four-digit year
-                            # Match a hyphen
(?:0[1-9]|1[0-2])            # Match a month (01 to 12)
-                            # Match a hyphen
(?:                          # Start of day group
  0[1-9]                     # Match a day from 01 to 09
  |                          # OR
  1\d                        # Match a day from 10 to 19
  |                          # OR
  2[0-8]                     # Match a day from 20 to 28
  |                          # OR
  29(?=-02-(?:1[6-9]|[2-9]\d)(?:0[48]|[2468][048]|[13579][26]))  
                             # Match February 29 on leap years (divisible by 4 and not divisible by 100, unless divisible by 400)
  |                          # OR
  30(?=(?:0[13-9]|1[0-2])-)  # Match a day from 30 to 31 (excluding February)
)
|                            # OR
(?:(?:\d{2})(?:0[48]|[2468][048]|[13579][26])|(?:(?:[02468][048]|[13579][26])(?:0[48]|[2468][048]|[13579][26])))-(?:02-29)
                             # Match leap years in the format YY-MM-DD (divisible by 4 and not divisible by 100, unless divisible by 400)
$ /
# DATE_REGEX with comments -END
*/
