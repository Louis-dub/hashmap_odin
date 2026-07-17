/*
** EPITECH PROJECT, 2026
** hashmap_odin
** File description:
** main
*/

#include <stdio.h>

int main(int ac, char **av)
{
    int code = 0;

    for (int i = 0; av[1][i] != '\0'; i++)
        code = (code * 31 + av[1][i]) % 16;
    printf("Hash for %s : %d\n", av[1], code);
    return 0;
}